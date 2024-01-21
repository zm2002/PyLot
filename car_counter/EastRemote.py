# import the opencv library 
import cv2
import time
from source_code.vehicle_detector import VehicleDetector
import json
import requests
from datetime import datetime
SPACES_COUNT = 8
import firebase_admin
from firebase_admin import credentials
url = 'https://bananaspot-249e7-default-rtdb.firebaseio.com/'
cred = credentials.Certificate("./bananaspot-249e7-firebase-adminsdk-29dme-85861daf07.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': url
})

from firebase_admin import db



# define a video capture object 
vid = cv2.VideoCapture(0) 
detector = VehicleDetector()

try:
    while(True): 
        graph = db.reference('Graphing/data/Location/East Remote/Spots Remaining').get()
        graph = list(graph)
        times = db.reference('Graphing/data/Location/East Remote/Time').get()
        times = list(times)
        check30 = db.reference('Graphing/data/Location/East Remote/30Check').get()
        # Capture the video frame 
        # by frame 
        ret, frame = vid.read()
        boxes = detector.detect_vehicles(frame)
        # Display the resulting frame 
        for box in boxes:
            x, y, w, h = box
            cv2.rectangle(frame, (x, y), (x + w, y + h), (25, 0, 180), 3)
        cv2.imshow('frame', frame)
        print("Total current count", len(boxes))
        # append the count to the graph
        #check if first 30 minutes using date time, append and swap bool if true
        if check30 == False and datetime.now().minute <=30 and datetime.now().minute >=0:
            print("first 30 minutes")
            print(graph)
            print(check30)
            graph.append(SPACES_COUNT-len(boxes))
            times.append(datetime.now().strftime("%H:%M:%S"))
            if len(graph) >336:
                graph.pop(0)
            response = requests.put(f'{url}/Graphing/data/Location/East%20Remote/Spots%20Remaining.json', json.dumps(graph))
            response = requests.put(f'{url}/Graphing/data/Location/East%20Remote/Time.json', json.dumps(times))
            check30 = True
            response = requests.put(f'{url}/Graphing/data/Location/East%20Remote/30Check.json', json.dumps(check30))
        elif check30 == True and datetime.now().minute >30 and datetime.now().minute <=59:
            print("second 30 minutes")
            check30 = False
            graph.append(str(len(boxes)))
            times.append(datetime.now().strftime("%H:%M:%S"))
            if len(graph) >336:
                graph.pop(0)
            response = requests.put(f'{url}/Graphing/data/Location/East%20Remote/Spots%20Remaining.json', json.dumps(graph))
            response = requests.put(f'{url}/Graphing/data/Location/East%20Remote/Time.json', json.dumps(times))
            response = requests.put(f'{url}/Graphing/data/Location/East%20Remote/30Check.json', json.dumps(check30))

        
        # the 'q' button is set as the 
        # quitting button you may use any 
        # desired button of your choice 
        if cv2.waitKey(1) & 0xFF == ord('b'):
            break


        now = datetime.now()

        current_time = now.strftime("%H:%M:%S")
        dic = {'cars': 8-len(boxes), 'time': current_time}
        print("Current Time =", current_time)
        response = requests.put(f'{url}/East_Remote/data.json', str(json.dumps(dic)))
        time.sleep(10)
except KeyboardInterrupt:
    pass
  
# After the loop release the cap object 
vid.release() 
# Destroy all the windows 
cv2.destroyAllWindows() 