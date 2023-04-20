import { Container, Typography, Grid, Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ModalPhone from '../components/modals/ModalPhone';
import { useParams } from 'react-router-dom';
import { getOneAnnouncement } from '../http/announcementAPI';

const AnnouncementPage = () => {

  const [announcement, setAnnouncement] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getOneAnnouncement(id).then(data => setAnnouncement(data));
  }, [])

  return (
    <Container>
      <Stack spacing={2} sx={{ flexDirection: { sm: "column", md: "row" }, my: 2, px: {xs: 2, sm: 3}}}>
        <Box
            flex="2"
            component="img"
            sx={{
              maxHeight: 500,
              maxWidth: 500,
              borderRadius: 2,
            }}
            alt={announcement.name}
            src={import.meta.env.VITE_API_URL + announcement.img} 
        />
        <Box flex="1" sx={{ m: 2 }}>
          <Stack spacing={1} sx={{ ml: 2 }} >
            <Typography align="center" variant="p" component="h1">{announcement.name}</Typography>
            <Typography variant="p" component="h3">Год: {announcement.year}</Typography>
            <Typography variant="p" component="h3">Пробег: {announcement.mileage} км.</Typography>
            <Typography variant="p" component="h3">Цена: {announcement.price} $</Typography>
            <Typography variant="p" component="h3">Город: {announcement.city}</Typography>
            <Typography variant="p" component="h3">Мощность двигателя: {announcement.power} л.с.</Typography>
            <Typography variant="p" component="h3">Привод: {announcement.drive}</Typography>
            <ModalPhone />
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default AnnouncementPage;