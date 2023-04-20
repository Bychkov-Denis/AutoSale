import React, { useState } from 'react';
import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ANNOUNCEMENT_ROUTE } from '../utils/consts';
const AnnouncementItem = (props) => {

  const { id, name, image, city, mileage } = props;

  const navigate = useNavigate();


  return (
    <Grid item xs="12" onClick={() => navigate(ANNOUNCEMENT_ROUTE + "/" + id)}>
      <Card>
        <CardActionArea>
        <CardMedia component="img" height="400" image={import.meta.env.VITE_API_URL + image} alt={name}>
        </CardMedia>
        <CardContent>
          <Typography variant="h5" component="h2">{name}</Typography>
          <Typography variant="body1" component="div">{city}</Typography>
          <Typography variant="body2" component="div">{mileage} км.</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default AnnouncementItem;