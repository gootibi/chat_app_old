import { useRef, useState } from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from "universal-cookie";
import { Chat } from './components/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';


const cookies = new Cookies();

function App() {

  const [isAuth, setIsAuth] = useState(cookies)
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove();
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  return (
    <>
      {room ? (
        <Chat room={room}/>
      ) : (
        <div className='room'>
          <label>Enter room name:</label>
          <input type="text" ref={roomInputRef} />
          <button type="button" onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}

      <div className='sign-out'>
        <button type="button" onClick={signUserOut}>Sign Out</button>
      </div>
    </>
  )
}

export default App;
