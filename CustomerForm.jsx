import React from 'react'

const CustomerForm = () => {
  return (
    <div className='cus-form'>
        <form className='item'>
            <input type="text" placeholder='Email' />
            <br />
            <input type="cell" placeholder='Phone' />
            <br />
            <input type="text" placeholder='Status' />
            <br />
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default CustomerForm