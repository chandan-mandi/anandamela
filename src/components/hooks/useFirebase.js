
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../LoginManager/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin]= useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // SAVE USER TO THE DATABASE
                saveUser(email, name, 'POST');
                const destination =  '/dashboard'
                history.replace(destination)
                setAuthError('')
                // const newUser = {email, displayName : name}
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false) )
    }

    // sign in using email & password
    const loginUsingPassword = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
               const destination = location?.state?.from || '/dashboard'
                history.replace(destination)
                setAuthError("");
                
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const signInUsingGoogle = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser(user.email, user?.displayName, 'PUT')
                // const destination = '/';
                history("/")
                setAuthError('');

            })
            .catch((error) => {
                setAuthError(error.message);
            })
    }

    // state ta dhore rakhar jonno
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
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
    },[user.email])

    // logout
    function Logout(navigate) {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }
    // SAVE USER TO THE DATABASE
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/user', {
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