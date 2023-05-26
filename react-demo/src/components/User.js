export const User = () => {
    const isLoggedIn = false;
    return <div className="">
        Welcome {isLoggedIn ? 'Rajeev': 'Guest'}
        Welcome {isLoggedIn && 'Rajeev'}
    </div>
}