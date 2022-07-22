import initializeAuthentication from "../../pages/Login/firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password, name, history) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // SAVE USER TO THE DATABASE
                saveUser(email, name, 'POST');
                setAuthError('')
                // const newUser = {email, displayName : name}
                const user = userCredential.user;
                setUser(user)
                return user;
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    // sign in using email & password
    const loginUsingPassword = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError("");
                setIsLoading(false);
                return userCredential.user;
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser(user.email, user?.displayName, 'PUT')
                setAuthError('');
                return user;

            })
            .catch((error) => {
                setAuthError(error.message);
            })
    }

    // state ta dhore rakhar jonno
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken))
                const uid = user.uid;
                setUser(user)
            } else {
                // User is signed out
                // ...
                setUser({})
            }
            setIsLoading(false);
        });

    }, [])

    // admin checking
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // logout
    function Logout() {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }
    // SAVE USER TO THE DATABASE
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        createUser,
        authError,
        loginUsingPassword,
        signInUsingGoogle,
        user,
        admin,
        isLoading,
        Logout
    }
}

export default useFirebase;