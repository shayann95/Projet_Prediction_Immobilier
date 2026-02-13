import requests
import json
# URL de ton serveur Flask
url = "http://127.0.0.1:5000/predict_home_price"

# Données du formulaire (doivent correspondre EXACTEMENT à request.form dans Flask)
payload = {
    "location": '1st Phase JP Nagar',  # doit exister dans __locations
    "total_sqft": 1000,                # nom exact attendu par Flask
    "bhk": 3,
    "bath": 3
}

# Envoi de la requête POST comme formulaire
response = requests.post(url, data=payload)

# Affichage du code HTTP
print("Status code:", response.status_code)

# Essai de récupération du JSON renvoyé par Flask
try:
    print("Response JSON:", response.json())
except requests.exceptions.JSONDecodeError:
    # Si Flask renvoie du texte brut ou une page d'erreur
    print("Erreur JSON ! Contenu reçu :", response.text)
