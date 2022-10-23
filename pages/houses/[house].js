import Navbar from "../../components/Navbar";
import { Container } from "@mui/system";
import { Grid, Box } from "@mui/material";
import Popup from "../../components/Popup";
import Cards from "../../components/Cards";
import { useEffect, useState } from "react";
import style from "../../styles/style.module.css";
import { useRouter } from "next/router";
import axios from "axios";

export default function Gryffindor() {
  const [personagens, setPersonagens] = useState([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { house } = router.query;

  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters/house/${house}`)
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
          fontSize: "24px",
          fontFamily: "Arial",
          position: "absolute",
          textTransform: "uppercase",
          marginLeft: "140px",
          marginTop: "-70px",
          color: "#A6955A",
        }}
      >
        {house}
      </Box>
      <img src="/images/line.png" alt="linha" className="line2" />

      <Container maxWidth="xl">
        <Grid container spacing={5} sx={{ display: "flex", justifyContent: "center" }}>
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
