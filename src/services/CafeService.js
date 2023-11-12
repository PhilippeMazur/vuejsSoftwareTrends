import { collection, query, where, getDocs, getDoc, onSnapshot, addDoc } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";

const db = useFirestore()
const q = query(collection(db, "cafes"));


const fillWithData = async (list) => {
    list.value = await useCollection(collection(db, 'cafes'))
}

const addToCafes = async (cafe) => {
    await addDoc(collection(db,'cafes'), cafe)
}

/* ORIGINAL QUERY
const getData = (collectionList) => {
    const querySnapshot = getDocs(q);
    onSnapshot(q, (querySnapshot) => {
        collectionList.value = [];
        querySnapshot.forEach((doc) => {
            collectionList.value.push(doc.data())
          
        });
        collectionList.value.forEach((cafe) => {
        })
    })
}
*/

export default {
    /*
     getCafes(collectionList) {
        getData(collectionList)
    },*/
    getData(list) {
        fillWithData(list)
    },
    addData(cafe) {
        addToCafes(cafe)
    }

}