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







AUTHENTICATION (WITH EMAIL AND PASSWORD)




BOILERPLATE

const firebase = require('firebase')

class Firebase {
    constructor() {
        // Initialize Firebase
        firebase.initializeApp(config);
        firebase.analytics();

        this.auth = firebase.auth()
        this.db = firebase.firestore()
    }



LOG IN, LOG OUT, SIGN UP

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(name, email, password){
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }



ADDING DATA TO DATABASE ASSOCIATED TO USER

    addQuote(quote) {
        if(!this.auth.currentUser){
            return alert("Not authorized!")
        }
        
        return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
            quote
        })
    }



CHECK IF FIREBASE INITIALIZED AND THEN SHOW LOG IN SCREEN

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }



CHECK IF USER LOGGED IN OR NOT

    getCurrentUsername() { 
        return this.auth.currentUser && this.auth.currentUser.displayName
    }



GET DATA FROM DB ASSOCIATED TO SIGNED IN USER

    async getCurrentUserQuote() {
        const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()

        return quote.get('quote')
    }

}
