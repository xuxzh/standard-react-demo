// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import { Button } from '@/components/ui'
import { AlertDialogDemo } from '@/shared';

function App() {
  // const [count, setCount] = useState(0)

  // function increase() {
  //   setCount(count + 1);
  // }

  // function decrease() {
  //   setCount(count - 1)
  // }
  const [open, setOpen] = useState(false)

  const openChange = () => {
    setOpen(true);
  }
  return (
    <>
      <Button onClick={openChange} variant={'destructive'}>测试</Button>
      {/* <Button variant={'destructive'} onClick={() => decrease()}>-</Button>
      <div className='tw-bg-orange-500 tw-text-white tw-h-6 tw-px-4 tw-mx-2 tw-inline-block'>{count}</div>
      <Button variant={'destructive'} onClick={() => increase()}>+</Button> */}
      <AlertDialogDemo open={open}></AlertDialogDemo>
    </>
  )
}

export default App