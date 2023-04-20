import React, { useContext, useEffect, useState } from 'react';
import { Typography, Button, Modal, Box, TextField, Stack, Select, FormControl, MenuItem, InputLabel, Grid, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Context } from '../../main';
import { observer } from 'mobx-react-lite';
import { createAnnouncement, getAnnouncements, getTypes, getBrands } from '../../http/announcementAPI';

const StyledModalBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  maxWidth: 600,
  color: "black",
  backgroundColor: "white",
  borderRadius: 10,
  padding: 20,
  boxShadow: 24,
  textAlign: "center",
  overflow: "auto"
});

const CreateAnnouncementModal = observer(() => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { announcement } = useContext(Context);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [mileage, setMileage] = useState(0);
  const [price, setPrice] = useState(0);
  const [year, setYear] = useState(2000);
  const [power, setPower] = useState(100);
  const [drive, setDrive] = useState("Передний");
  const [file, setFile] = useState(null);

  useEffect(() => {
    getAnnouncements().then(data => announcement.setAnnouncements(data.rows));
    getTypes().then(data => announcement.setTypes(data));
    getBrands().then(data => announcement.setBrands(data));
  }, [])

  const selectFile = event => {
    setFile(event.target.files[0]);
  }

  const addAnnouncement = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("city", city);
    formData.append("mileage", mileage);
    formData.append("price", price);
    formData.append("year", year);
    formData.append("power", power);
    formData.append("drive", drive);
    formData.append("img", file);
    formData.append("brandId", announcement.selectedBrand.id);
    formData.append("typeId", announcement.selectedType.id);
    createAnnouncement(formData).then(data => handleClose());
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>Добавить объявление</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalBox>
          <Stack spacing={2}>
            <Typography id="modal-modal-title" variant="h5" component="h5">
              Добавить объявление
            </Typography>
            <TextField
              value={name}
              onChange={event => setName(event.target.value)}
              label="Введите название объявления" 
            />
           <Grid container flexWrap="nowrap" spacing={2}>
              <TextField
                item xs={6}
                value={city}
                onChange={event => setCity(event.target.value)}  
                label="Введите город" 
              />
              <TextField
                item xs={6}
                value={mileage}
                onChange={event => setMileage(event.target.value)}  
                type="number" 
                label="Введите пробег" 
              />
              <TextField
                item xs={6}
                value={price}
                onChange={event => setPrice(event.target.value)}  
                type="number" 
                label="Введите цену" 
              />
              <TextField
                item xs={6}
                value={year}
                onChange={event => setYear(event.target.value)}  
                type="number" 
                label="Введите год" 
              />
           </Grid>
            <Grid container direction="row" flexWrap="nowrap" spacing={2}>
              <FormControl item xs={6} fullWidth>
                <InputLabel id="demo-simple-select-label">Марка</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Марка"
                >
                  {
                    announcement.brands.map(brand => {
                      return <MenuItem 
                      key={brand.name} 
                      value={brand.name}
                      onClick={() => announcement.setSelectedBrand(brand)}
                      >
                        {brand.name}
                      </MenuItem>
                    })
                  }
                </Select>
              </FormControl>
              <FormControl item xs={6} fullWidth>
                <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Тип"
                >
                  {
                    announcement.types.map(type => {
                      return <MenuItem 
                      key={type.name} 
                      value={type.name}
                      onClick={() => announcement.setSelectedType(type)}
                      >
                        {type.name}
                      </MenuItem>
                    })
                  }
                </Select>
              </FormControl>
            </Grid>
           <TextField 
              value={power}
              onChange={event => setPower(event.target.value)}
              type="number" 
              label="Введите мощность двигателя" 
            />
            <TextField 
              type="file"
              onChange={selectFile} 
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label1">Привод</InputLabel>
              <Select
                value={drive}
                onChange={event => setDrive(event.target.value)}
                labelId="demo-simple-select-label1"
                id="demo-simple-select1"
                label="Привод"
              >
                <MenuItem value="Передний">Передний</MenuItem>
                <MenuItem value="Задний">Задний</MenuItem>
                <MenuItem value="Полный">Полный</MenuItem>
              </Select>
            </FormControl>
            <Stack spacing={2}>
              <Button variant="contained" color="success" onClick={addAnnouncement}>Добавить</Button>
              <Button variant="contained" color="error" onClick={handleClose}>Закрыть</Button>
            </Stack>
          </Stack>
        </StyledModalBox>
      </Modal>
    </>
  )
})

export default CreateAnnouncementModal;