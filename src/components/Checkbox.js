import React from 'react'

const Checkbox = ({runningOnly,handleRunningChange}) => {
  return (
    <div>
     <label>Current Only?</label>
      <input
         type='checkbox'
         name='status'
         checked={runningOnly}
         onChange={handleRunningChange}
      />
    </div>
  )
}

export default Checkbox;
