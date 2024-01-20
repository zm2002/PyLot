import requests
import json

url = 'https://bananaspot-249e7-default-rtdb.firebaseio.com/'

while True:
    response = requests.put(f'{url}/West_Core/data.json', json.dumps({'West_Core': '10'}))
    print(response.json())
# response = requests.delete(f'{url}/path/to/data.json')
