import { addDoc, app, collection, db, getDocs, updateDoc, doc, deleteDoc } from "./firebase.js"

// console.log("APP", app);
// console.log(db);


const add = async () => {
    try {
        const uploadData = await addDoc(collection(db, "user"), {
            firstName: "Dheeraj",
            lastName: "Kumar",
            age: 23
        });
        console.log("DATA", uploadData)
    } catch (error) {
    }
}

const getData = async () => {
    try {
        const reciveData = await getDocs(collection(db, "user"))
        reciveData.forEach((doc) => {
            console.log(`${doc.id}`)
            // // console.log("getData"  , doc.data())
        })

    } catch (error) {

    }
}

const updateData = async ()  => {
    try {
        console.log("hello")
         await updateDoc(doc(db , "user" , "U61YuPKFtJcmNsf01hgn") , {
            fullName : "dheeraj Kumar"
        })
        console.log("update " )
    } catch (error) {
        
    }
}
const deletData = async () => {
    await deleteDoc(doc(db, "user" , "Ce8Q9vSUlFPvc0XLo6ql"))
    console.log("Delet")
}


window.add = add
window.getData = getData
window.updateData = updateData
window.deletData = deletData
