import React from 'react'
import "./enterhour.css"

function EnterHour() {
  return (
    <div className='form-container'>
      <form>
        <h2>Enter Lab Time</h2>
        <input type="date"/>
        <select>
          <option disabled> Select Team</option>
            <option>Systems</option>
            <option>Networking</option>
            <option>Security</option>
            <option>Dev</option>
        </select>
        <input type='number' min=".5" max="18" step={.5} placeholder='Hours...'/>
        <textarea name="text" maxlength={50} wrap='soft'/>
        <input type='submit' value="Submit"/>
      </form>
    </div>
  )
}

export default EnterHour