import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
console.log('0 import complete in App.js')

console.log('1 before App')
const App = () => {
console.log('2 after App')

  console.log('3 before state')
  const [state, setState] = useState([])
  console.log('4 after state')

  console.log('5 before useEffect')
	useEffect(() => {
    fetchItem()
    console.log('5.5 hey - in useEffects')
  }, [])
  console.log('6 after useEffect')
  
  console.log('7 before fetchItem')     
  const fetchItem = async () => {
    const fetchItem = await fetch('/api/getExchangeInfo')
    const item = await fetchItem.json()
    console.log('7.5 hey - in fetchItem')
    setState(item.serverTime)
  }
  console.log('8 after fetchItem')

  console.log('9 before return')
  return (
    <div className="App" style={{display:'flex', flexWrap:'wrap'}}>
      {state}
      {console.log('9.5 hey in return I am')}
    </div>
  )
  console.log('10 after return')
}

console.log('11 before export default App')

export default App

console.log('12 after export default App')

