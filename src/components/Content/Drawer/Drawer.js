import React from 'react'
import styled from 'styled-components'
import Navlink from './Navlink'

const Drawer = () => {
  return (
    <Main>
        
        <Bar style={{width:'300px'}} className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

            <div className="offcanvas-header">
                {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">Categories</h5> */}
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
    color:#C68B59;
`

const Bar = styled.div`
    background-color: #FCF8E8;
`

const Categories = styled.div`

    display: flex;
    flex-flow: column;
    align-items: flex-start;

`

export default Drawer

