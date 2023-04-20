import React, { useContext } from 'react';
import NewsItem from './NewsItem';
import { Context } from '../main';
import { Grid, Container } from '@mui/material';

const NewsList = () => {

  const { news } = useContext(Context);

  return (
    <Container sx={{ my: 2 }}>
      <Grid container spacing={2} sx={{ px: {xs: 2, sm: 3 }}}>
          {
            news.news.map(news => {
              return <NewsItem 
              key={news.id} 
              id={news.id} 
              title={news.title}
              image={news.img}
              createdAt={news.createdAt} 
            />
            })
          }
      </Grid>
    </Container>
  )
}

export default NewsList;