import json
import requests
import matplotlib

url = "https://bananaspot-249e7-default-rtdb.firebaseio.com/"

hello = {"hello": 1}

f = open("dataovertime.json")
data = json.load(f)
response = requests.put(f"{url}/Graphing/data.json", json.dumps(data))
f.close()
