import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import MyHours from "./pages/MyHours/MyHours";
import "./styles/partials/_globals.scss";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignInPage from "./pages/SignInPage/SignInPage";

firebase.initializeApp({
  apiKey: "AIzaSyDps9Eh01IgPE_j6w4I2nY824w25SX6-FA",
  authDomain: "time-system-44754.firebaseapp.com",
  projectId: "time-system-44754",
  storageBucket: "time-system-44754.appspot.com",
  messagingSenderId: "858652033780",
  appId: "1:858652033780:web:cf38ad27d130fee10994a1",
  measurementId: "G-GVY488C7KH",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage user={user} />} />
        <Route path="/hours" element={<MyHours />} />
        <Route
          path="/sign-in"
          element={<SignInPage firebase={firebase} auth={auth} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
