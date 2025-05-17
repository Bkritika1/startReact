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
import MovingDot from './MovingDot'
import FormMaking from './FormMaking'
import AddingArray from './AddingArray'
import RemovingArray from './RemovingArray'
import TransformingArray from './TransformingArray'
import Background from './Background'
import ReactForm from './ReactForm'
import Accordion from './Accordion'
import SyncedInputs from './SyncedInputs'
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
      <MovingDot/>
      <FormMaking/>
      <AddingArray/>
      <RemovingArray/>
      <TransformingArray/>
      <Background/>
      <ReactForm/>
      <Accordion/>
      <SyncedInputs/>
    </>
  )
}

export default App
