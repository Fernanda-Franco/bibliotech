import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/Storage";

//chave de acesso ao firebase
const firebaseConfig = {
    apiKey: "AIzaSyBPThr0tmprOYouhY4_mEmj0nJET06JRXs",
    authDomain: "bibliotech-fernanda.firebaseapp.com",
    projectId: "bibliotech-fernanda",
    storageBucket: "bibliotech-fernanda.appspot.com",
    messagingSenderId: "639183548509",
    appId: "1:639183548509:web:78d6fe8206ae36cd2f5db4"
  };

  //inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
//Configura o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
//Configura o fireStore e seus recursos de banco de dados
export const db = getFirestore(app);
//Configura o Storage e seus recursos de UpLoad
export const storage = getStorage(app);