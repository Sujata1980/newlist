import logo from './logo.svg';
import React,{ useState} from 'react';
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState([]);

  const handleClick = () => {
      setList((preVal)=>{
        return [...preVal,name];
      })
      setName('')
  }
  return (
    <div className="App">
      <h1>TO-DO-LIST</h1>
      <input type="text" placeholder="Add your todo" value={name} onChange={(e)=> setName(e.target.value)}/>
      <button onClick= {handleClick}>+</button>
      {
        list.map((item,id)=>{
          return(
            <li>
            {item}
            </li>
          )
        })
      }
    </div>
  );
}

export default App;
