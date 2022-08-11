import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';

const Bottom = (props) => {

    const [page, setPage] = useState(1);

    const handleChange = (event, value)=>{ 
        setPage(value);
        console.log(value);
    }

  return (
    <Pagination count={20} page={page} onChange={handleChange}/>
  )
}

export default Bottom