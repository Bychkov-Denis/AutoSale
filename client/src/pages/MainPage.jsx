import { Container, Stack, Box } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import SelectType from '../components/SelectType';
import SelectBrand from '../components/SelectBrand';
import AnnouncementList from '../components/AnnouncementList';
import { Context } from '../main';
import { getAnnouncements, getBrands, getTypes } from '../http/announcementAPI';
import { observer } from 'mobx-react-lite';
import { getNews } from '../http/newsAPI';

const MainPage = observer(() => {

  const { announcement, news } = useContext(Context);

  useEffect(() => {
    getTypes().then(data => announcement.setTypes(data));
    getBrands().then(data => announcement.setBrands(data));
    getNews().then(data => news.setNews(data));
    getAnnouncements().then(data => announcement.setAnnouncements(data.rows));
  }, [])
  
  useEffect(() => {
    getAnnouncements(announcement.selectedType.id, announcement.selectedBrand.id).then(data => {
      announcement.setAnnouncements(data.rows);
    });
  }, [announcement.selectedType, announcement.selectedBrand])

  return (
    <Container>
      <Stack sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <Box flex={3} padding={2}>
          <SelectType />
          <SelectBrand />
        </Box>
        <Box flex={9} padding={2}>
          <AnnouncementList />
        </Box>
      </Stack>
    </Container>
  )
});

export default MainPage;