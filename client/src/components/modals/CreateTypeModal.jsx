import React, { useState } from 'react';
import { Typography, Button, Modal, Box, TextField, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { createType } from '../../http/announcementAPI';

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

const СreateTypeModal = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [type, setType] = useState("");

  const addType = () => {
    createType({name: type}).then(data => {
      setType("")
      handleClose()
    })
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>Добавить тип</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalBox>
          <Stack spacing={3}>
            <Typography id="modal-modal-title" variant="h5" component="h5">
              Добавить тип
            </Typography>
            <TextField
              value={type}
              onChange={event => setType(event.target.value)}
              label="Добавить тип" 
            />
            <Stack spacing={2}>
              <Button variant="contained" color="success" onClick={addType}>Добавить</Button>
              <Button variant="contained" color="error" onClick={handleClose}>Закрыть</Button>
            </Stack>
          </Stack>
        </StyledModalBox>
      </Modal>
    </>
  )
}

export default СreateTypeModal;