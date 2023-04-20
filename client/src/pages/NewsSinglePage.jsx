import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOneNews } from '../http/newsAPI';
import { Typography, Container, Stack, Box } from '@mui/material';

const NewsSinglePage = () => {

  const [news, setNews] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getOneNews(id).then(data => setNews(data));
  }, []);

  let date = new Date(news.createdAt);
  date = date.toLocaleDateString();

  return (
    <Container>
      <Stack spacing={2} sx={{ px: {xs: 2, sm: 3}, my: 2 }}>
        <Box
          component="img"
          sx={{
            maxHeight: 500,
            minWidth: "100%",
            borderRadius: 2,
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
          alt={news.title}
          src={import.meta.env.VITE_API_URL + news.img} 
        />
        <Typography variant="h3" component="h3" align="center">{news.title}</Typography>
        <Typography variant="h5" component="p">{news.description}</Typography>
        <Typography variant="h5" component="p">Дата создания: {date}</Typography>
      </Stack>
    </Container>
  )
}

export default NewsSinglePage;