import React, { useContext } from 'react';
import { Usercontext } from '../App';
function CompC(props) {
const User=useContext(Usercontext)
  return (
    <div>
      {User}
    </div>
  );
}

export default CompC;