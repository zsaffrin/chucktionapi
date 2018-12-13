import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
import * as bodyParser from 'body-parser';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const app = express();
const main = express();

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

export const webApi = functions.https.onRequest(main);

const collections = {
    spellingz: 'spellingz',
};

app.get('/', (req, res) => {
    const library = {};
    Object.keys(collections).forEach((key) => {
        firebaseHelper.firestore
            .backup(db, collections[key])
            .then(data => {
                library[key] = data;
                return data;
            })
            .then((data) => (
                Object.keys(library).length === Object.keys(collections).length &&
                res.status(200).send(library)
            ));
    });
});

app.get('/spellingz', (req, res) => {
    firebaseHelper.firestore
        .backup(db, collections.spellingz)
        .then(data => res.status(200).send(data));
});
