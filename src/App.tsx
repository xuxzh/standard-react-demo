import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui'

function App() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1)
  }
  return (
    <>
      <Button variant={'destructive'} onClick={() => decrease()}>-</Button>
      <div className='tw-bg-orange-500 tw-text-white tw-h-6 tw-px-4 tw-mx-2 tw-inline-block'>{count}</div>
      <Button variant={'destructive'} onClick={() => increase()}>+</Button>
    </>
  )
}

export default App