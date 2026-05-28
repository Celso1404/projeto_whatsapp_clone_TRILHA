import { Firebase } from "./Firebase";

export class Upload {

    static send(file, from) {
        return new Promise((s, f) => {
            let ref = Firebase.hd().ref(from).child(Date.now() + '_' + file.name);
        
            ref.put(file).then(snapshot => {
                snapshot.ref.getDownloadURL().then(downloadURL => { 
                    s(downloadURL); 
                }).catch(e => f(e));
            }).catch(e => f(e));
        });
    }
}