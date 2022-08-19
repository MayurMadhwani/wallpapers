import React from 'react'
import { useEffect, useState } from 'react';
import {storage} from '../../firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import styled from 'styled-components';
import lightloading from '../../images/lightloading.gif';
import Loader from '../Loader';
import Navbar from '../Navbar';
import ImageContainer from './utilities/ImageContainer';
import { Pagination } from '@mui/material';
import Overlay from '../Overlay';

const Home = () => {

  const [refs, setRefs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(8);
  const [pageCount, setPageCount] = useState(1);
  const [pageContent, setpageContent] = useState([]);
  const [loadedPageContent, setLoadedPageContent] = useState({});

  const handleChange = async(event, value)=>{ 

    setCurrentPage(value);    
    
  }

  useEffect(() => {

    const getData = async()=>{
      
      setLoading(true);

      //getting reference to all the images only once

      if(refs.length === 0){
        
        const listRef = ref(storage,'gs://wallpapers-de0a1.appspot.com/Main/');
        const list = await listAll(listRef);
        const newList = list.items;
        setRefs(newList);
        setPageCount(Math.ceil(newList.length/8));

        //setting data
        
        const indexOfLastPhoto = currentPage * photosPerPage;
        const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
        const contentForCurrentPage = newList.slice(indexOfFirstPhoto,indexOfLastPhoto);

        const temp = [];
        for(const imageRef of contentForCurrentPage){

          const url = await getDownloadURL(imageRef);
          temp.push(url);
          setpageContent(temp);

        }

        const objTemp = loadedPageContent;
        objTemp[currentPage] = temp;
        setLoadedPageContent(objTemp);

      }else{

        //setting data
        setpageContent([]);

        const indexOfLastPhoto = currentPage * photosPerPage;
        const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
        const contentForCurrentPage = refs.slice(indexOfFirstPhoto,indexOfLastPhoto);

        const temp = [];

        for(const imageRef of contentForCurrentPage){

          const url = await getDownloadURL(imageRef);
          temp.push(url);
          setpageContent(temp);

        }

        const objTemp = loadedPageContent;
        objTemp[currentPage] = temp;
        setLoadedPageContent(objTemp);

      }

      setLoading(false);
    }

    //if current page is already loaded then just use it

    if(loadedPageContent[currentPage]){
      setpageContent(loadedPageContent[currentPage]);
    }else{
      getData();
    }
    

  }, [currentPage])

  return (
    <Main>

      <Overlay/>

      <Content>
        
        <Navbar/>
        <Container>
          {pageContent && pageContent.map((url,idx)=>
            <ImageContainer key={idx} url={url}/>
          )}
          {loading && <Loader image={lightloading}/>}
        </Container>

        <Pagination count={pageCount} page={currentPage} onChange={handleChange}/>

      </Content>
    </Main>
  )
}

const Main = styled.div`
  height: 100%;
  min-width: 100%;
  width: auto;
  display:flex;
  justify-content: center;
`
const Content = styled.div`
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  
  display: grid;
  grid-column-start: 1;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 20px;
  transition-duration: 0.4s;
  animation-timing-function: ease;
  
  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: auto
  }

`

export default Home