import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-5 border-b">
            <div className="">
                <Link to="/" className='flex items-center gap-2'>
                <img src="https://img.icons8.com/nolan/64/windows-notepad.png" alt="apple-notes" className='w-10 h-10'/>
                     <p className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Keeper</p>
                </Link>
            </div>
            <ul className='flex gap-5 text-gray-500 font-semibold'>
                <li>
                    <Link to="/">
                        Notes
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}