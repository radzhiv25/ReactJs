export const NameList = () => {
    const names = ['Rajeev','Noopur','Zeus']
    return(
    <div className="">
        {
            names.map((name) => {
                return <h2 key={name}>{name}</h2>
            } )
        }
    </div>)
}