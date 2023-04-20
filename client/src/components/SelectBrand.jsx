import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Context } from '../main';

const SelectBrand = observer(() => {

  const { announcement } = useContext(Context);

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
        <InputLabel id="demo-simple-select-standard-label">Название марки</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Age"
        >
          {
            announcement.brands.map(brand => {
              return <MenuItem key={brand.id} onClick={() => announcement.setSelectedBrand(brand)} value={brand.name}>{brand.name}</MenuItem>
            })
          }
        </Select>
      </FormControl>
  )
});

export default SelectBrand;