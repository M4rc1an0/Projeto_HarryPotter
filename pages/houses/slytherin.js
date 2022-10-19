import Navbar from "../../components/Navbar";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Popup from '../../components/Popup';
import UrlHouse from "../../components/urlHouse/slytherin";
import Cards from "../../components/Cards"
import { useEffect,useState } from "react";
import axios from "axios";
import style from '../../styles/style.module.css'

export default function Gryffindor() {

  const [personagens, setPersonagens] = useState([])
  const [open, setOpen] = useState(false)
  
  

  useEffect(()=>{
    axios.get(UrlHouse())
    .then((res)=> setPersonagens(res.data))
    .catch((err)=>console.log(err))
},[])

const [person, setPerson] = useState(false)

const person1 = (personagem)=>{
    setOpen(true)
    setPerson(personagem)

}
  return (
    <div className={style.fundoJornal}>
    
    <Navbar/>
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    {personagens.map((personagem,key) =>(
                     <Grid item sm={4} md={3} lg={2.2} key={key} onClick={() => person1(personagem) }>
                        <Cards personagem={personagem}/> 
                        
                     </Grid>
                ))}
                </Grid>
                
            </Container>
            <Popup personagem={person} opened={open} setValor={setOpen}/>
    </div>
  );

}
