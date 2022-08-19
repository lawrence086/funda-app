import React from 'react'

const MessageHeader = ({hText}) => {
  return (
    <div className='header-con'>
        <span className="sm-text-muted sm-fs-4 sm-text-secondary h-header-text">{hText}</span>
        <span className="h-icon-span"><i className="bi bi-person-plus-fill h-icon"></i></span>
    </div>
  )
}

export default MessageHeader