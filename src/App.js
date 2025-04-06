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

  const handleDelete = (id) => {
    if (window.confirm("Are You Sure You Want to delete this")){
    console.log(id)
    // alert(id)
    const nList = [...list]
    const filter =nList.filter((val,i)=>{
      return id !== i
    })

    setList(filter);
  }}
  return (
    <div className="App">
      <h1>TO-DO-LIST</h1>
      <input type="text" placeholder="Add your todo" value={name} onChange={(e)=> setName(e.target.value)}/>
      <button onClick= {handleClick}>+</button>
      {
        list.map((item,id)=>{
          return(
            <li key={id}>
            {item}
            <button onClick={()=>handleDelete(id)}>-</button>
            </li>
          )
        })
      }
    </div>
  );
}

export default App;
