export const Navbar = () => {
    return(
        <div className="nav p-5 flex items-center text-black">
            <h1 className="mr-auto text-3xl text-transparent bg-clip-text font-semibold bg-gradient-to-br from-violet-500 to-fuchsia-500">Radzhiv</h1>
            <ul className="inline-flex font-medium gap-5">
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li><button className="hover:text-green-500">Resume</button></li>
                <li>Mode</li>
            </ul>
        </div>
    )
}