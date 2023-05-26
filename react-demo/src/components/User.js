export const User = () => {
    const isLoggedIn = true;
    return <div className="">
        Welcome {isLoggedIn ? 'Rajeev': 'Guest'}
    </div>
}