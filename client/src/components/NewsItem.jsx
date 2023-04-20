import React from 'react';
import { Card, CardMedia, CardContent, CardActionArea, Grid, Typography } from '@mui/material';
import { NEWS_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';

const NewsItem = (props) => {

  const { id, title, image, createdAt } = props;

  const navigate = useNavigate();

  let date = new Date(createdAt);
  date = date.toLocaleDateString();

  return (
    <Grid item xs="12" sm="6" onClick={() => navigate(NEWS_ROUTE + "/" + id)}>
      <Card>
        <CardActionArea>
          <CardMedia
             component="img"
             height="200"
             image={import.meta.env.VITE_API_URL + image}
             alt={title}
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Дата создания: {date}
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default NewsItem;