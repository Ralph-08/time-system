import NavBar from "../../components/NavBar/NavBar";
import "./SignInPage.scss";
import googleIcon from "../../assets/photos/google-icon.webp";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const SignInPage = ({ firebase, auth }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  if (user) navigate("/");

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="signIn">
        <section className="signIn-card">
          <img
            src={googleIcon}
            className="signIn-card__icon"
            alt="google icon"
          />
          <button className="signIn-card__button" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </section>
      </main>
    </>
  );
};

export default SignInPage;
