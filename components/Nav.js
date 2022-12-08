import Link from "next/link"
import {auth} from '../utils/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'

export default function Nav() {

    const [user, loading] = useAuthState(auth);
    console.log(user)

    return (

        <nav className="flex justify-between items-center py-10">
            <Link href="/">
                <button className="text-3xl leading-10 uppercase font-black text-lg font-medium">Creative Thoughts</button>
            </Link>
            <ul className="flex items-center gap-10">
                {!user && (
                <Link href={'/auth/login'}>
                    <a className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">Join Now</a>
                </Link>
                )}
                {user && (
                    <div className="flex items-center gap-6">
                    <Link href='/posts'>
                        <button className="font-bold bg-cyan-500 text-white py-2 px-4 rounded-xl textx-small">Post</button>
                    </Link>
                    <Link href='/dashboard'>
                        <button className="text-white font-bold bg-cyan-500 rounded-xl py-2 px-4"> Dashboard </button>
                    </Link>
                    </div>
                )}
            </ul>
            

        </nav>
    )
}