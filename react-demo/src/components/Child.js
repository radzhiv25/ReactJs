export const Child = (props) => {
    return(
        <div className="">
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    )
}