import React from 'react';
import { Container, Button, Stack } from '@mui/material';
import CreateBrandModal from '../components/modals/СreateBrandModal';
import CreateTypeModal from '../components/modals/CreateTypeModal';
import CreateAnnouncementModal from '../components/modals/CreateAnnouncementModal';
import CreateNewsModal from '../components/modals/CreateNewsModal';


const AdminPage = () => {
  return (
    <Container>
      <Stack spacing={2} sx={{ px: {xs: 2, sm: 3}, my: 2 }}>
        <CreateBrandModal />
        <CreateTypeModal />
        <CreateAnnouncementModal />
        <CreateNewsModal />
      </Stack>
    </Container>
  )
}

export default AdminPage;