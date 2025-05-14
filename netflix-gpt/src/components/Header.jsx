import React, {useEffect} from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import {LOGO} from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')

      }
    });
    //unsubscribe when component unmounts
    return ()=> unsubscribe()
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
           })
      .catch(() => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 "
            // src='https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
