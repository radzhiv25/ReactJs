import {Child} from './Child'

export const Parent = () => {
    const greetParent = () => {
        alert("Hello Parent!");
    }

    return <Child greetHandler={greetParent}/>
}