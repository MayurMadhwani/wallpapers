import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../features/darkmode/darkmodeSlice';
import { darkBackground, lighBackground, solidDark, solidLight } from '../../colors/colors';

// text color -> "#A5C9CA";

const Toggle = () => {

    const [checked, setChecked] = useState(false)
    const darkmode = useSelector(state=>state.darkmode.value);
    const dispatch = useDispatch();

    const handleCheckboxChange = ()=>{
      setChecked(!checked);
      dispatch(update());
    }

  return (
    <Main>
        <Checkbox
            checked = {checked}
            onChange = {handleCheckboxChange}
            type="checkbox" id="checkbox"
        />
        <Label 
          style={{
            backgroundColor: darkmode ? darkBackground : lighBackground,
          }}
          htmlFor="checkbox">
            
            <i 
                style={{color:'#FFF80A'}}
                className='fas fa-sun'
            />
            <i
                style={{color:'#002B5B'}}
                className="fas fa-moon"
            />
            
            <Ball
                style={{
                    transform:checked?'translateX(24px)':'',
                    backgroundColor: darkmode ? solidDark : solidLight,
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
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  transition-duration: 0.4s;
  cursor: pointer;
  i{
    font-size: 18px;
  }
`

const Ball = styled.div`
  
  width: 21px;
  height: 21px;
  
  position: absolute;
  margin-bottom: 1px;
  left: 3px;
  border-radius: 50px;
  transition: 0.4s;
`

export default Toggle