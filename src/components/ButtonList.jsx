import React from 'react'
import Button from './Button'



const ButtonList = () => {
  return (
    <div className='flex justify-between'>
      <Button name="All"></Button>
      <Button name="Game"></Button>
      <Button name="Songs"></Button>
      <Button name="Cricket"></Button>
      <Button name="WWE"></Button>
      <Button name="Cooking"></Button>
    </div>
  )
}

export default ButtonList
