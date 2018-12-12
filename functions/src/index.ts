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

app.get('/spellingz', (req, res) => {
    firebaseHelper.firestore
        .backup(db, collections.spellingz)
        .then(data => res.status(200).send(data));
});
