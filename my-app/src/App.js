import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  const [state, setState] = useState([])

	useEffect(() => {
    fetchItem()

  }, [])
  
  const fetchItem = async () => {
    const fetchItem = await fetch('/api/getExchangeInfo')
    const item = await fetchItem.json()

    setState(item.serverTime)
  }

  return (
    <div className="App" style={{display:'flex', flexWrap:'wrap'}}>
      {state}

    </div>
  )

}


export default App


