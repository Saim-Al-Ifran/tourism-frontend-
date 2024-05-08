import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile as updateProfileFirebase,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState("");

   
    const createUser = async (photoUrl, name, email, password) => {
        setLoading(true);
        const authUserCredential = await createUserWithEmailAndPassword(auth, email, password);
        const { user } = authUserCredential;
        await updateProfileFirebase(user, { displayName: name, photoURL: photoUrl });
        return user;
    }

 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

   
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

     
    const signInWithGoogle = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
 
    const signInWithGithub = async()=>{
          setLoading(true)
          const provider = new GithubAuthProvider();
          try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
          } catch (error) {
              setError(error.message);
          } finally {
                setLoading(false);
          }
    }

    const updateProfile = async (photoUrl, name) => {
        setLoading(true);
        try {
            await updateProfileFirebase(auth.currentUser, { displayName: name, photoURL: photoUrl });
            setUser({ ...user, displayName: name, photoURL: photoUrl });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        error,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        updateProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;