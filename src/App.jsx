import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setpass] = useState("pass");
  const [number, setnum] = useState(false);
  const [ch , setchar] = useState(false);
  const [length, setlen] = useState(8);
  
  function passgen(){
    let pass = "abcdefghijklmnopABCDEFGHIJKLMNOP";
    if(number) pass += "013456789";
    if(ch) pass += "~!@#$%^&*()_+";
    let  res = "";
    for(let i = 0 ; i < length ; ++i){
      res += pass.charAt(Math.random()*(pass.length-1))
    }
    setpass(res);

  }

  useEffect(() => {
    passgen();
  },[length , number , ch])
  return (
    <>
      <div className= "p-6 bg-red-600 sm max-w-sm mx-auto items-center space-x-4">
        <div className='flex space-x-1 p-6'>
        <input
          value = {password}
          readOnly>
        </input>
        <div>
          <button> copy</button>
        </div>
        </div>
        <input type="range" value = {length} max={50} onChange={(e)=>setlen(e.target.value)}></input>Length<br/><br/>
        <input type="checkbox" onChange={()=>setnum((number) => !number)}></input>Number<br/><br/>
        <input type="checkbox" onChange={()=>setchar((ch) => !ch)}></input>Charecter<br/><br/>
        <button onClick={passgen}>New</button>
      </div>
    </>
  )
}

export default App
