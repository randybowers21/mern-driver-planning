import React from 'react';
import { Typography, TextField, Button, Box, Modal } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AddForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
       <Button onClick={handleOpen}>Open modal</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <form autoComplete='off' noValidate>
            <Typography variant='h6'>Plan Day</Typography>
              <TextField name='daytimeStart' variant='outlined' label='Daytime Start' fullWidth/>
              <TextField name='daytimeReturn' variant='outlined' label='Daytime Return' fullWidth/>
              <TextField name='nightTimeStart' variant='outlined' label='Nighttime Start' fullWidth/>
              <TextField name='nightTimeEnd' variant='outlined' label='Nighttime End'  fullWidth/>
            <Button variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
            <Button variant='contained' color='secondary' size='small' fullWidth>Clear</Button>
        </form>
      </Box>
    </Modal>
    </>
   
  );
}

export default AddForm;
