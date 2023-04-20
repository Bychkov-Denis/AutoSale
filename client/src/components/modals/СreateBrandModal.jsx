import React, { useState } from 'react';
import { Typography, Button, Modal, Box, TextField, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { createBrand } from '../../http/announcementAPI';

const StyledModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  maxWidth: 400,
  color: "black",
  backgroundColor: "white",
  borderRadius: 10,
  boxShadow: 24,
  padding: 30,
  textAlign: "center"
});

const СreateBrandModal = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [brand, setBrand] = useState("");

  const addBrand = () => {
    createBrand({name: brand}).then(data => {
      setBrand("")
      handleClose()
    })
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>Добавить марку</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalBox>
          <Stack spacing={3}>
            <Typography id="modal-modal-title" variant="h5" component="h5">
              Добавить марку
            </Typography>
            <TextField
              value={brand}
              onChange={event => setBrand(event.target.value)}
              label="Добавить марку" 
            />
            <Stack spacing={2}>
              <Button variant="contained" color="success" onClick={addBrand}>Добавить</Button>
              <Button variant="contained" color="error" onClick={handleClose}>Закрыть</Button>
            </Stack>
          </Stack>
        </StyledModalBox>
      </Modal>
    </>
  )
}

export default СreateBrandModal;