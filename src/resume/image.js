import React from 'react'
import Myphoto from '../gunapict.jpg';
import '../index.css'

export default function Image() {
  return (
    <div className='img-wrapper'>
        <img src={Myphoto}
            alt='myphoto'
            width='300px'
            height='300px' />
    </div>
  )
}
