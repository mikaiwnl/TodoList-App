import './FrmMemo.scss';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import React, {useState,useEffect} from 'react';
import Memo from './Memo';



 function FrmMemo(props) {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(props.modifier ? props.modifier.value : '');
  }
  , [props.modifier]);
const ajouteTache = (e) => {
    e.preventDefault();
    
    
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

    
    setInput('');
};

    return (
    
        <form className="FrmMemo" onSubmit={ajouteTache}>
        <div className="frmMemo">
          <input 
          type="text" 
          placeholder="AJOUTEZ UNE TACHE"
          value={input}
          name='text'
          
          className='tacheAjoutez'
          date={new Date().toLocaleString()}
          onChange={(e) => setInput(e.target.value)}/>

         
        </div> 
        
       <button className=''><SendRoundedIcon/></button>
     
    
      </form>
        
 
      
    );

  }
    export default FrmMemo;
