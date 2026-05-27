import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

export class Firebase {
    constructor() {
        this._config = 
        {
            apiKey: "AIzaSyDNa1JqOjxuasFwBpCjBSSew2jq0vhKv4o",
            authDomain: "whatsapp-clone-69424.firebaseapp.com",
            projectId: "whatsapp-clone-69424",
            storageBucket: "whatsapp-clone-69424.firebasestorage.app",
            messagingSenderId: "112776440085",
            appId: "1:112776440085:web:53169eadeeb6fe33b9a11c",
            storageBucket: "gs://whatsapp-clone-69424.firebasestorage.app",
            measurementId: "G-LJXYBWLPPD"
        };
        this.init();
    }

    init() {
        if(!window._initializedFirebase) {
            firebase.initializeApp(this._config);
            firebase.firestore().settings({
                merge: true 
            });
            window._initializedFirebase = true;
        }
    }
    static db() {
        return firebase.firestore();
    }

    static hd() {
        return firebase.storage();
    }

    initAuth() {
       return new Promise((s, f)=> {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result =>{
                let token = result.credential.accessToken;
                let user = result.user;
                s({
                    user,
                    token
                });
            })
            .catch(err=>{
                f(err);
        })
       }) 
    }
}