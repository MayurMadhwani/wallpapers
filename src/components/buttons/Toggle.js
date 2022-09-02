import React, { useState } from 'react'
import styled from 'styled-components'

const Toggle = () => {

    const [checked, setChecked] = useState(false)
    
    const handleCheckboxChange = ()=>{
      setChecked(!checked);
    }

  return (
    <Main>
        <Checkbox
            checked = {checked}
            onChange = {handleCheckboxChange}
            type="checkbox" id="checkbox"
        />
        <Label htmlFor="checkbox">
            
            <i 
                style={{color:'#FFE300'}}
                className='fas fa-sun'
            />
            <i
                style={{color:'#002B5B'}}
                className="fas fa-moon"
            />
            
            <Ball
                style={{
                    transform:checked?'translateX(24px)':'',
                }}
            />
        </Label>
    </Main>
  )
}

const Main = styled.div`
  display: block;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  justify-self: flex-end;
`

const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
  align-self: flex-end;
`

const Label = styled.label`

  width: 50px;
  height: 24px;
  background-color:#FCF8E8;
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  cursor: pointer;
  i{
    font-size: 18px;
  }
`

const Ball = styled.div`
  
  width: 20px;
  height: 20px;
  background-color: #C68B59;
  position: absolute;
  margin-bottom: 1px;
  left: 3px;
  border-radius: 50%;
  transition: transform 0.2s linear;
  
`

export default Toggle