import React, {useEffect} from 'react'
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {FcGoogle} from 'react-icons/fc'
import { auth } from '../../utils/firebase'
import {useRouter} from 'next/router'
import {useAuthState} from 'react-firebase-hooks/auth'

const Login = () => {

  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  
  const googleProivder = new GoogleAuthProvider();
  const GoogleLogin = async () => {
      try {
        const result = await signInWithPopup(auth, googleProivder);
        route.push("/")
      } catch (error) {
        console.log(error);
      }
  };

  useEffect(() => {
    if(user) {
      route.push('/');
    } else {
      console.log('login');
    }
  }, [user])



  return (
    <div className='shadow-xl mt-32 p-10 text-gray-700 rounded-lg'>
        <h2 className='text-2xl font-medium'>Join Today</h2>
        <div className='py-4'>
            <h3 className='py-4'>Sign in with one of the providers</h3>    
            <button 
              onClick={GoogleLogin}
              className='text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2'> 
              <FcGoogle className='text-2xl'/> Sign in with Google
            </button>
        </div> 
    </div>
  )
}

export default Login