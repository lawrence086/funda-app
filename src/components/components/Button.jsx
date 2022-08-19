import React from 'react'
import { Button } from "react-bootstrap";

const Buttons = ({b_text}) => {
  return (
    <>
        <Button variant={"primary"} className='s-btn mt-4 active n-active'>{b_text}</Button>
    </>
  )
}

export default Buttons