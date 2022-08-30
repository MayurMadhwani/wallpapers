import React, { useState } from 'react'
import styled from 'styled-components'

const Toggle = () => {

    const [checked, setChecked] = useState(false)
    
    const handleCheckboxChange = (event)=>{
        setChecked((prev)=>!prev);
    }

  return (
    <div>
        <Checkbox
            checked = {checked}
            onChange = {handleCheckboxChange}
            type="checkbox" id="checkbox"
        />
        <Label htmlFor="checkbox">
            <i
                style={{color:'pink'}}
                className="fas fa-moon"
            />
            <i 
                style={{color:'yellow'}}
                className='fas fa-sun'
            />
            <Ball
                style={{
                    transform:checked?'translateX(24px)':'',
                }}
            />
        </Label>
    </div>
  )
}

const Checkbox = styled.input`

  opacity: 0;
  position: absolute;

`

const Label = styled.label`

  width: 50px;
  height: 26px;
  background-color:#111;
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  cursor: pointer;
`

const Ball = styled.div`
  
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  left: 3px;
  border-radius: 50%;
  transition: transform 0.2s linear;
  
`

export default Toggle