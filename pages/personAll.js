import Cards from "../components/Cards";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Popup from "../components/Popup";
import Url from "../components/Url";
import style from "../styles/style.module.css";

export default function PersonAll() {
  const [personagens, setPersonagens] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(Url())
      .then((res) => setPersonagens(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [person, setPerson] = useState(false);
  const person1 = (personagem) => {
    setOpen(true);
    setPerson(personagem);
  };

  return (
    <div className={style.fundoJornal}>
      <Navbar />
      <img
        src="/images/hogwartsShield.png"
        alt="shield"
        style={{ paddingBottom: "10px", marginLeft: "60px" }}
      />
      <Box
        sx={{
          fontSize: "21px",
          fontFamily: "Arial",
          position: "absolute",
          textTransform: "uppercase",
          marginLeft: "140px",
          marginTop: "-68px",
          color: "#A6955A",
        }}
      >
        Personagens
      </Box>
      <img src="/images/line.png" alt="linha" className="line2" />
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {personagens.map((personagem, key) => (
            <Grid
              item
              sm={4}
              md={3}
              lg={2.2}
              key={key}
              onClick={() => person1(personagem)}
            >
              <Cards personagem={personagem} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Popup personagem={person} opened={open} setValor={setOpen} />
    </div>
  );
}
