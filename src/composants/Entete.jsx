import './Entete.scss';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function Entete() {



  return (
    <header className="Entete">
        <h1>TRELLOW 2</h1>
        
      <img src="image/entete.gif" alt="" />
      <AssignmentIcon className='logo' style={{ fill: '#00000' }} /> 
   

    </header>
      
  );
}