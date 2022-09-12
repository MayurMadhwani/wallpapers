import React from 'react'
import styled from 'styled-components'
import Navlink from './Navlink'
import { useSelector } from 'react-redux'
import { darkBackground, darkText, lightBackground, lightText, solidDark, solidLight } from '../../../colors/colors';

const Drawer = () => {

    const darkmode = useSelector(state=>state.darkmode.value);

  return (
    <Main
        style={{
            color:darkmode?solidDark:solidLight,

        }}
    >
        
        <Bar 
            style={{
                width:'300px',
                backgroundColor:darkmode?darkBackground:lightBackground,
            }} 
            className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

            <div className="offcanvas-header">
                <Heading>Categories</Heading>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"/>
            </div>

            <div className="offcanvas-body">
                
                <hr/>
                
                <Categories>
                    {/* <Link to='/home'className="nav-link active" aria-current="page" >This area is under construction</Link> */}
                    
                    <Navlink path={'animals'} category={'Animals'}/>
                    <Navlink path={'architecture'} category={'Architecture'}/>
                    <Navlink path={'birds'} category={'Birds'}/>
                    <Navlink path={'creative'} category={'Creative'}/>
                    <Navlink path={'flowers'} category={'Flowers'}/>
                    <Navlink path={'lowlight'} category={'Lowlight'}/>
                    <Navlink path={'macro'} category={'Macro'}/>
                    <Navlink path={'nature'} category={'Nature'}/>
                    <Navlink path={'street'} category={'Street'}/>
                    <Navlink path={'sunset'} category={'Sunset'}/>

                </Categories>

            </div>
        </Bar>
    </Main>
  )
}

const Main = styled.div`
    font-family: 'Open Sans', sans-serif;
`

const Heading = styled.h5`
`

const Bar = styled.div`
`

const Categories = styled.div`

    display: flex;
    flex-flow: column;
    align-items: flex-start;

`

export default Drawer

