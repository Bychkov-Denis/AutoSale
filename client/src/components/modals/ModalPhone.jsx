import React, { useState } from 'react';
import { Typography, Box, Button, Modal } from '@mui/material';
import { styled } from '@mui/system';

const StyledModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 200,
  maxWidth: 400,
  color: "black",
  backgroundColor: "white",
  borderRadius: 10,
  boxShadow: 24,
  padding: 50,
  textAlign: "center"
});

const ModalPhone = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" sx={{ mt: 3 }} onClick={handleOpen}>Позвонить</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalBox>
          <Typography id="modal-modal-title" variant="h3" component="h3">
            AutoSale
          </Typography>
          <Typography variant="h4" id="modal-modal-description" sx={{ mt: 2 }}>
            +375 29 456 55 55
          </Typography>
        </StyledModalBox>
      </Modal>
    </>
  )
}

export default ModalPhone;