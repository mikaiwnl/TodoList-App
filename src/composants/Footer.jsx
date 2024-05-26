import './Footer.scss'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Footer({tache,setFilter}) {
  return (

    console.log("nombre de taches",tache),
    <footer className='Footer'>
      <Stack direction="row" spacing={2}>
        <Button color="primary" onClick={() => setFilter('TOUTE')}>TOUTE</Button>
        <Button variant="contained" color="success" onClick={() => setFilter('COMPLETEZ')}>
          COMPLETEZ
        </Button>
        <Button variant="outlined" color="error" onClick={() => setFilter('ACTIVE')}>
         ACTIVE
        </Button>
    
      </Stack>
    </footer>
  );
}