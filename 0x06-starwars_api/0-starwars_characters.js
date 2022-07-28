#!/usr/bin/python3
import requests
import json

x = 0
def jprint(obj):
    '''
    Create a formatted string of the python Json object
    '''
text = json.dumps(obj, sort_keys=True, indent=2)
print(text)

parameters={
    'count': 7
}

response = requests.get('https://swapi-api.hbtn.io/api/films/')
print(response.status_code)
names = response.json()['results'][0]['characters']
print(names)
