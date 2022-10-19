import { Button, Link } from "@mui/material";
import { Box } from "@mui/system";


export default function Fundo() {
    return (
      <div>
      <div className="goldBox"></div>

       <div>
        <img src="/images/fundo.png" className="castelo" alt='imagem hogwarts'/>
        <img src="/images/logo.png" className="logo"/>
      </div>

        <button className="retangulo" ><a href="personAll">VEJA TODOS PERSONAGENS</a></button>
      

      <div className="vejaCasas">
        <img src="/images/hogwartsShield.png" alt="shield" className="shield" />
        <p className="navegueCasas">Navegue pelas Casas</p>
        <div className="line" />
      </div>

       
        
         <button style={{cursor:"pointer"}} >
            <Link href="/houses/gryffindor"> 
              <img src="/images/grifinoria.png" alt="grifinoria" className="grifinoria" />
            </Link> 
          </button>

          <button style={{cursor:"pointer"}}> 
            <Link href="/houses/slytherin">
              <img src="/images/sonserina.png" alt="sonserina" className="sonserina" />
            </Link>
          </button>

          <button style={{cursor:"pointer"}}>
            <Link href="/houses/hufflepuff">
              <img src="/images/lufa-lufa.png" alt="lufa-lufa" className="lufa-lufa" />
            </Link>
          </button>

          <button style={{cursor:"pointer"}}>
            <Link href="/houses/ravenclaw">
            <img src="/images/corvinal.png" alt="corvinal" className="corvinal" />
            </Link>
          </button>

     

  

     

      </div>

    )
  }