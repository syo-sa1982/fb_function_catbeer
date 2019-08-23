import * as functions from 'firebase-functions';
// import { request } from 'http';
// import { response } from 'express';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const echo = functions.https.onRequest((request, response) => {
  const task = request.body
  console.log(JSON.stringify(task))
  response.send(JSON.stringify(task))
});