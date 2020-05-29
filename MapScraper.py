import pandas as pd, numpy as np
import requests
import json
import time

final_data = []

# Parameters
coordinates = ['42.2808,-83.7430']
keywords = ['restaurant']
radius = '1000'
api_key = 'AIzaSyCjJLkTKGdauHGUkzoeEoyS0ZoD4wUnlx8' #insert your Places API

for coordinate in coordinates:
    for keyword in keywords:
        url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+coordinate+'&radius='+str(radius)+'&keyword='+str(keyword)+'&key='+str(api_key)

while True:
    print(url)
    respon = requests.get(url)
    jj = json.loads(respon.text)
    results = jj['results']

    for result in results:
        name = result.get('name')
        place_id = result .get('place_id')
        lat = result['geometry']['location']['lat']
        lng = result['geometry']['location']['lng']
        rating = result.get('rating')
        reviews = result.get('user_ratings_total')
        types = result.get('types')
        vicinity = result.get('vicinity')
        price_level = result.get('price_level')
        photos = result.get('photos')
        status = result.get('business_status')
        temp_closed = result.get('permanently_closed')
        data = [name, place_id, lat, lng, rating, reviews, types, vicinity, price_level, photos, status, temp_closed]
        final_data.append(data)

    time.sleep(5)
    if 'next_page_token' not in jj:
        break
    else:
        next_page_token = jj['next_page_token']
        url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key='+str(api_key)+'&pagetoken='+str(next_page_token)

labels = ['Place Name','Place ID', 'Latitude', 'Longitude', 'Ratings', 'Reviews', 'Types', 'Vicinity', 'Price Level', 'Photos', 'Status', 'Temp Closed']

export_dataframe_1_medium = pd.DataFrame.from_records(final_data, columns=labels)
<<<<<<< HEAD
export_dataframe_1_medium.to_csv('export_dataframe_1_medium.csv')
=======
export_dataframe_1_medium.to_csv('annarbor.csv')
>>>>>>> 24824fd0fe1d6ca31ed189e182f40362bed60fa5
