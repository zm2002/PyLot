# import the opencv library 
import cv2
import time
from source_code.vehicle_detector import VehicleDetector  
# define a video capture object 
vid = cv2.VideoCapture(0) 
detector = VehicleDetector()
try:
    while(True): 
      
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
        # the 'q' button is set as the 
        # quitting button you may use any 
        # desired button of your choice 
        if cv2.waitKey(1) & 0xFF == ord('b'):
            break
        time.sleep(120)
except KeyboardInterrupt:
    pass
  
# After the loop release the cap object 
vid.release() 
# Destroy all the windows 
cv2.destroyAllWindows() 