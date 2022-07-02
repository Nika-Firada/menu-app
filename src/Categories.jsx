import React from 'react'

const Categories = ({filtered, cat}) => {

  return (
    <div className='btn-container'>
      {cat.map((catt, index) => {
        return <button onClick={()=> filtered(catt)} key={index} className='filter-btn' type='button'>
          {catt}
        </button>
      })}
    </div>
  )
}

export default Categories