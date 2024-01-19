import React, { useState } from 'react'
import Model from './Model';

const CallToAction = () => {


  const [model, setModel] = useState(false);

  const handleClick = () => {
    setModel(!model)
  }


  return (
    <>
    <section className='call-to-action'>
      <h2>Hurry up! Book your Tickets</h2>
      <button onClick={handleClick}>Know More?</button>
    </section>
    {
      model && <Model model={model} handleClick={handleClick} />
    }
    </>
  )
}

export default CallToAction