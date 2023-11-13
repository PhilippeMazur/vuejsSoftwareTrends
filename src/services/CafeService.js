import { collection, query, where, getDocs, getDoc, onSnapshot, addDoc, doc } from "firebase/firestore";
import { useFirestore, useCollection, useDocument } from "vuefire";
import { ref } from "vue";

const db = useFirestore()
const q = query(collection(db, "cafes"));


const fillWithData = async (list) => {
    list.value = await useCollection(collection(db, 'cafes'))
}

const addToCafes = async (cafe) => {
    await addDoc(collection(db,'cafes'), cafe)
}

const getById = async (id) => {
    const res = await doc(collection(db, 'cafes'), id)
    const docSnap = await getDoc(res)
    const answer = docSnap.data()

    return answer
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
    },
    getCafeById(id) {
        return getById(id)
    }

}