import {useState, useEffect} from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('useEffect hook called');
    }, [count]);
  return (
    <div>
        <p>count : {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default UseEffectHook