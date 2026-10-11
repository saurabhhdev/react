import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Card user='Saurabh' age={20} img='https://images.unsplash.com/photo-1787716788809-20cd2c08894f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      <Card user='Divya' age={19} img= 'https://images.unsplash.com/photo-1791238317000-7b6c634b38f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      
    </div>
  )
}

export default App
