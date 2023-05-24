function Greet (props){
    return(
        <div className="">
            <h1>Hey 👋, {props.name}</h1>
            {props.children}
            {/* props are immutable */}
        </div>
    )
}

export default Greet