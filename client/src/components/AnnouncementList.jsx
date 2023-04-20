import { Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../main';
import AnnouncementItem from './AnnouncementItem';

const AnnouncementList = () => {

  const { announcement } = useContext(Context);

  return (
    <Grid container spacing={5}>
      {
        announcement.announcements.map(announcement => {
          return <AnnouncementItem
            key={announcement.id}
            id={announcement.id}
            name={announcement.name}
            image={announcement.img} 
            city={announcement.city}
            mileage={announcement.mileage}
          />
        })
      }
    </Grid>
  )
}

export default AnnouncementList