import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import Cards from './Cards'
import Form from './Form'
import './App.css';

const App = () => {

  const [count, setCount] = useState(1)
  const [data, setData]=useState([])

  useEffect(()=> {
    Axios.get(`https://rickandmortyapi.com/api/character/?page=${count}`)
      .then(res => {
        console.log(res.data)
        setData(res.data.results)
      })
      .catch(err => {
        console.log({err})
      })
  }, [count])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header" style={{fontFamily:'Patrick Hand SC, cursive', fontSize: '2.5rem'}}>Rick & Morty Characters</h1>
      <Form data={data} count={count} setCount={setCount}/>
      <Cards data={data} />
    </div>
  );
}

export default App;
