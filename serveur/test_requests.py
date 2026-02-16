import requests
import json

url = "http://127.0.0.1:5000/predict_home_price"


payload = {
    "location": '1st Phase JP Nagar',  
    "total_sqft": 1000,               
    "bhk": 3,
    "bath": 3
}

response = requests.post(url, data=payload)


print("Status code:", response.status_code)


try:
    print("Response JSON:", response.json())
except requests.exceptions.JSONDecodeError:
  
    print("Erreur JSON ! Contenu reçu :", response.text)
