import { useState } from 'react'
import './App.css'
import Header from './Componentes/Header'
import FormAddMoney from './Componentes/FormAddMoney'
import MainControl from './Componentes/MainControl'


function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false)


  const componet = isValid 
                 ? <MainControl count ={count} />
                 :<FormAddMoney setCount ={setCount} setIsValid ={setIsValid}/>

  return (
    <div className="App">
     
    <Header />
    {componet}

  </div>
  )
}

export default App
