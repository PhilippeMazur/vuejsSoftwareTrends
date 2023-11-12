import { collection, query, where, getDocs, getDoc, onSnapshot } from "firebase/firestore";
import { useFirestore } from "vuefire";

const getData = async (collectionList) => {
    const db = useFirestore()
    const q = query(collection(db, "cafes"));
    
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
        collectionList.value = [];
        querySnapshot.forEach((doc) => {
            collectionList.value.push(doc.data())
          
        });
        collectionList.value.forEach((cafe) => {
         console.log(cafe);
        })
    })

    }

export default {
    getCafes(cafeCollection) {
        getData(cafeCollection);
    }
}