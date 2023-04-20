import React, { useState } from 'react';
import { Typography, Button, Modal, Box, TextField, Stack } from '@mui/material';
import { createNews } from '../../http/newsAPI'; 
import { styled } from '@mui/system';

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

const CreateNewsModal = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const selectFile = event => {
    setFile(event.target.files[0]);
  }

  const addNews = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("img", file);
    createNews(formData).then(data => handleClose());
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>Добавить новость</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalBox>
          <Stack spacing={3}>
            <Typography id="modal-modal-title" variant="h5" component="h5">
            Добавить новость
            </Typography>
            <TextField 
              label="Введите заголовок новости"
              onChange={event => setTitle(event.target.value)} 
            />
            <TextField
              id="outlined-multiline-static"
              label="Введите описание новости"
              multiline
              rows={4}
              defaultValue="Введите описание"
              onChange={event => setDescription(event.target.value)}
            />
            <TextField 
              type="file"
              onChange={selectFile} 
            />
            <Stack spacing={2}>
              <Button variant="contained" color="success" onClick={addNews}>Добавить</Button>
              <Button variant="contained" color="error" onClick={handleClose}>Закрыть</Button>
            </Stack>
          </Stack>
        </StyledModalBox>
      </Modal>
    </>
  )
}

export default CreateNewsModal;