import React from 'react'

const FollowersHeader = ({text,no_followes}) => {
  return (
    <div className='mt-4'>
      <span className="display-6 fs-5 f-h-txt">{text}</span>
      <span className="display-6 fs-6 f-h-txt text-danger">({no_followes})</span>
    </div>
  )
}

export default FollowersHeader