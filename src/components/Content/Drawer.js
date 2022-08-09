import React from 'react'
import { Link } from 'react-router-dom'

const Drawer = () => {
  return (
    <div>
        
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Categories</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
                
                <hr/>

                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
                
                <div>
                    
                        <Link to='/home'className="nav-link active" aria-current="page" >All</Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Drawer

