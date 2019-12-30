import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
});

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container>
      <div style={{ backgroundColor: "gold" }}>{`spacing ${theme.spacing()}`}</div>
      <Paper className={classes.root}>
        <Typography>Hello world. I should be a color</Typography>
      </Paper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default Home;
