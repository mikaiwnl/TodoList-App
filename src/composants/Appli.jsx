import './Appli.scss';
import './Entete.scss';
import Entete from './Entete';
import Footer from './Footer';
import React, {memo, useState,useEffect} from 'react';
import FrmMemo from './FrmMemo';
import Memo from './Memo';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
 function Appli() {
  const [tache,setTache]=useState(()=>JSON.parse(localStorage.getItem('tache')) || []);
  const [filter, setFilter] = React.useState('toutes');

  let filtrerTache;
  switch (filter) {
    case 'TOUTE':
      filtrerTache = tache;
      break;
    case 'COMPLETEZ':
      filtrerTache = tache.filter(t => t.isComplete);
      break;
    case 'ACTIVE':
      filtrerTache = tache.filter(t => !t.isComplete);
      break;
    default:
      filtrerTache = tache;
      break;
  }

    
;

useEffect(
  ()  =>  {
            localStorage.setItem("tache", JSON.stringify(tache));
            console.log("=========> localStorage est modifié.");
          }
  ,
  [tache]
);


   function ajouteTache(Untache) {
    
     if (!Untache.text || /^\s*$/.test(Untache.text)) {
       localStorage.setItem('tache', JSON.stringify(tache));
       return;

     }

     const nouvelleTache = [Untache, ...tache];

     setTache(nouvelleTache);
     console.log(Untache, ...tache);
   }
  




const supprimerMemo = id => {
  const supprimerMemo = [...tache].filter(memo => memo.id !== id);
  setTache(supprimerMemo);
  localStorage.setItem('tache', JSON.stringify(supprimerMemo));
}

  const completeMemo = id => {
    let tacheModifier = tache.map(memo => {
      if(memo.id === id) {
        memo.isComplete = !memo.isComplete;
      }
      return memo;
    });
      setTache(tacheModifier);
      
}   

const effacerToutesLesTaches = () => {
  setTache([]);
  localStorage.setItem('tache', JSON.stringify([]));
}

return (
  <div className="Appli">
    <Entete></Entete>
    <img src="/image/gifChat.gif" alt="gifChat" className="gif"/>
    <h1>TACHE A COMPLETEZ</h1>
  

    <FrmMemo onSubmit={ajouteTache} />
    {tache.length === 0 ? (
      <h2>Pas de tâche ajoutée</h2>
      
    ) : (
      <>
        <h2>Nombre de tâches à faire : {tache.filter(t => !t.isComplete).length}</h2>
    <div className='container'>
        <Memo 
          
          tache={filtrerTache}
          completeMemo={completeMemo}
          supprimerMemo={supprimerMemo}
          
          />
    </div>
      </>
      
    )}
 
    <footer>
    <Footer tache={filtrerTache} setFilter={setFilter} />  
    </footer>
  
    <div className='effacer'>
        <Button  
      className="effacer" 
      variant="contained" 
      color="error" 
      startIcon={<DeleteIcon />} 
      onClick={effacerToutesLesTaches}>Effacer toutes
      </Button>
    </div>
  </div>
)
}
export default Appli;