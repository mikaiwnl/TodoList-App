import './Memo.scss'
import FrmMemo from './FrmMemo';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
const initierAudio = () => {
    const audio = document.querySelector('.audioBtn');
    audio.play();
    audio.volume = 0.1;
  }


function Memo({tache,completeMemo,supprimerMemo,filter}) {
    const [modifier, setModifier] = useState({
        id: null,
        value: '',
        date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' },)
        
    })


    return tache.map((memo, index) => (
    <motion.div className={memo.isComplete ? 'memo-ranger complete' : 'memo-ranger'} 
        key={index}
        initial={{ opacity: 0, x: filter === 'COMPLETEZ' ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: filter === 'COMPLETEZ' ? 100 : -100 }}
        transition={{ duration: 0.5 }}
        
        >
    
        <div className='contenue'>
            {memo.text}
           
       
           <div className='Date'>  {new Date().toLocaleDateString()}</div>

           </div>

           <div className="toutIcone">
            <div className='icons'>
           
                <CancelIcon
                    onClick={() => supprimerMemo(memo.id)}
                    className='delete-icon'
                />
             </div>  

            <div className="icon">
                <audio className="audioBtn">
                    <source src="/audio/audioSource.mp3"></source>
                 
                    </audio>
                 <CheckCircleIcon 
                        onClick={() => {
                            completeMemo(memo.id);
                            initierAudio();
                        }} 
                    />
                    
           </div>           
  
        </div>

    </motion.div>   
        
    ));
}
export default Memo;