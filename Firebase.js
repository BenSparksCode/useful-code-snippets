BOILERPLATE STARTER CODE

import AppContextProvider from './contexts/AppContext'
const firebase = require('firebase')
require('firebase/firestore')

const firebaseConfig = {
    [COPY THE FIREBASE CONFIG JSON HERE]
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
(<AppContextProvider>
    <App />
</AppContextProvider>)
, document.getElementById('root'));








DATABASE FUNCTIONS

const firebase = require('firebase')


SUBSCRIBE to Collection

componentDidMount() {
    firebase
        .firestore()
        .collection('notes')
        .onSnapshot(serverUpdate => {
            const notes = serverUpdate.docs.map(doc => {
                const data = doc.data()
                data['id'] = doc.id
                return data
            })

            this.setNotes(notes)
        })
}


ADD Document to Collection

const newFromDB = await firebase
    .firestore()
    .collection('notes')
    .add({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })


UPDATE Document in Collection

firebase
    .firestore()
    .collection('notes')
    .doc(id)
    .update({
        title: noteObj.title,
        body: noteObj.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })


DELETE Document from Collection

firebase
    .firestore()
    .collection('notes')
    .doc(note.id)
    .delete()







AUTHENTICATION


Coming Soon...