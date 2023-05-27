import './App.css';
// import { PostForm } from './components/PostForm';
// import Hey from './components/Greet'
// import {About} from './components/About'
// import {Message} from './components/Message'
// import {Handler} from './components/Handling'
// import {Parent} from './components/Parent'
// import {User} from './components/User'
// import {NameList} from './components/NameList'
// import { Stylesheet } from './components/Stylesheet'
// import { Inline } from './components/inline';
// import styles from './appStyles.module.css'
// import { Form } from './components/Form';
// import { PostList } from './components/PostList';
import NAMES from './components/data.json';
import {useState,useTransition} from 'react';

function App() {
  const [query,setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending,startTransition] = useTransition()
  const changeHandler = (event) => {
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))
  }
  const filteredNames = NAMES.filter(item =>{
    return item.firstName.includes(query) || item.lastName.includes(query)
  } )
  return (
    <div className="App">
      {/* <Hey name="Rajeev"/>
      <About name="Rajeev" job="Developer" age="20"/>
      <Hey name="Noopur"/>
      <About name="Noopur" job="UI/UX" age="20"/>
      <Hey name="Zeus">
      <About name="Zeus" job="God" age="Unknown"/>
      <p>This is children prop</p>
      </Hey> */}
      {/* <Message /> */}
      {/* <Handler /> */}
      {/* <Parent /> */}
      {/* <User /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      {/* <Inline /> 
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form /> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      <input type="text" value={inputValue} onChange={changeHandler}/>
      {isPending && <p>Updating List...</p>}
      {
        filteredNames.map((item) => (
          <p key={item.id}>{item.firstName} {item.lastName}</p>
        ))
      }
    </div>
  );
}

export default App;
