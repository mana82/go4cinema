FROM mongo

COPY movies-compact.json /movies-compact.json

CMD mongoimport --host mongo -u mana -p 12345 --authenticationDatabase admin --db cinema --collection movies --type json --file /movies-compact.json --jsonArray