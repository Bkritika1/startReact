import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyButton from './MyButton'
import Profile from './Profile'  
import ProductList from './ProductList'
import './App.css'
import Congratulation from './congratulation'
import Sculpture from './Sculpture'
import Counter from './Counter'

function App() {

  return (
    <>
      <div>
       First div
      </div>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <MyButton/>
      <MyButton/>
      <MyButton/>

      <div>Second div</div>
      <Profile/>
      <ProductList/>
      <Congratulation/>
      <Sculpture/>
      <Counter/>
    </>
  )
}

export default App
