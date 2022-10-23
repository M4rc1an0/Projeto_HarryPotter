import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "30px" }}>
      <Grid>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#A6955A", textAlign: "center" }}
        >
          <Toolbar>
            <Button
              data-testid="teste"
              className="btnHome"
              sx={{ marginLeft: "40%" }}
              href="/"
            >
              <Box
                component="img"
                src="/images/smallLogo.png"
                alt="smalllogo"
              />
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
    </Box>
  );
}
