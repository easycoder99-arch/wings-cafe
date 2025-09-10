import React from 'react'
import { useNavigate } from 'react-router-dom'
const Customer = () => {

  const navigate = useNavigate()

  return (
    <div>
        
        <div className="customer-buttons">
          <button onClick={()=>navigate('info')}>Info Format</button>
          <button onClick={()=>navigate('form')}>Customer Form</button>
        </div>
    </div>
  )
}

export default Customer