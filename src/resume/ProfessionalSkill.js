import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function ProfessionalSkill() {
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div className='progresses' >
            <label>HTML</label>
            <ProgressBar animated now={60} />
            <label>CSS</label>
            <ProgressBar animated now={60} />
            <label>JavaScript</label>
            <ProgressBar animated now={55} />
        </div>
        <div className='progresses2'>
            <label>ReactJs</label>
            <ProgressBar animated now={60} />
            <label>Python</label>
            <ProgressBar animated now={50} />
        </div>
    </div>
    </div>
  )
}
