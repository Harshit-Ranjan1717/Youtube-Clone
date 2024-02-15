import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 py-2 m-2 bg-gradient-to-r from-cyan-400 to-blue-700 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
