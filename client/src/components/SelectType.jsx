import React, { useContext } from 'react'
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';

const SelectType = observer(() => {

  const { announcement } = useContext(Context);

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
        <InputLabel id="demo-simple-select-standard-label">Тип автомобиля</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Age"
          >
            {
              announcement.types.map(type => {
                return <MenuItem key={type.id} onClick={() => announcement.setSelectedType(type)} value={type.name}>{type.name}</MenuItem>
              })
            }
          </Select>
      </FormControl>
    </>
  )
});

export default SelectType