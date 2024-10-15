import React from 'react'

function Time({preparation}) {
  return (
    <div className='prep-time'>
        <h3>Preparation time</h3>
        <ul className='d-flex flex-column gap-2'>
          {Object.entries(preparation).map(([key, value]) => (
            <li>{key.charAt(0).toUpperCase() + key.slice(1)}: <span>{value}</span></li>
          ))}
        </ul>
        
    </div>
  )
}

export default Time