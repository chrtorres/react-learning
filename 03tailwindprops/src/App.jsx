import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name: 'Chris',
    age: 36,
    address: {
      city: 'Harrogate',
      state: 'Tennessee',
      country: 'United States',
    }
  };

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' 
      >Vite with Tailwind</h1>
      <Card username={myObj.name} post='Junior Software Engineer' />
      <Card username='Json' myArr={newArr}  />
      <Card />
    </>
  )
}

export default App
