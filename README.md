# chucktionapi

REST API for The Chucktionary

## Available Calls

This is a read-only API. Only GET requests are supported.

https://chucktionapi.firebaseapp.com/api/v1/

route | returns
------|--------
/ | Object of all collections and their documents
/[COLLECTION_ID] | Object of the collection and all its documents
/[COLLECTION_ID]/[DOCUMENT_ID] | Object of the single document

## Collections

id | name
---|-----
spellingz | Spellingz
favorites | Chuck's Favorite Things
hates | Things Chuck Hates
doesntget | Things Chuck Just Doesn't Get
culinary | Chuck's Culinary Corner
wtf | WTF?!
ohchuck | Oh Chuck
