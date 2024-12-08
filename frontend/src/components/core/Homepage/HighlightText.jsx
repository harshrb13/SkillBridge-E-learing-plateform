import React from 'react'

const HighlightText = ({text}) => {
  return (
<span className='font-bold bg-gradient-to-r from-blue-100  to-blue-200  text-transparent bg-clip-text'>
  {" "}
        {text}
        {" "}
    </span>
  
  )
}

export default HighlightText