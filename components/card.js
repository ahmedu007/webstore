import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grow,
  CardActionArea,
  Grid,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default ({ i, showProductsPage, openModal }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grow in timeout={(i + 1) * 250}>
        <Card className={classes.card}>
          <CardActionArea onClick={openModal}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the content.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={showProductsPage}>
              View
            </Button>
          </CardActions>
        </Card>
      </Grow>
    </Grid>
  );
};
