import requests
import json
import random

value = random.randint(0,2)
if value == 1:
    data = {'allow':True}
else:
    data = {'allow':False}
  
res = requests.post('http://127.0.0.1:3000/test', json=data) 

returned_data = res.json() 
print(data)
print(returned_data)