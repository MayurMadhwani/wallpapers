import React from 'react'
import { useEffect, useState } from 'react';
import {storage} from '../../firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import styled from 'styled-components';
import lightloading from '../../images/lightloading.gif';
import Loader from '../Loader';
import Navbar from '../Navbar';
import ImageContainer from './utilities/ImageContainer';

const Home = () => {

  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const getData = async()=>{
      
      setLoading(true);
      const listRef = ref(storage,'gs://wallpapers-de0a1.appspot.com/Main/');
      
      const list = await listAll(listRef);
      const newList = list.items;
      
      const tempUrls = [];

      // for(const url of tempUrls){
      //   setUrls([...urls, url]);
      // }

      for(const imageRef of newList){
        const url = await getDownloadURL(imageRef);
        tempUrls.push(url);
        setUrls(tempUrls);
      }

      // setUrls(tempUrls);
      setLoading(false);
    }

    getData();

  }, [])

  return (
    <Main>
      <Content>
        
        <Navbar/>
        <Container>
          {urls && urls.map((url,idx)=>
            <ImageContainer key={idx} url={url}/>
          )}
        </Container>

        {loading && <Loader image={lightloading}/>}
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