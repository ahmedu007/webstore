import React from "react";
import { Link, Typography } from "@material-ui/core";

export default ({ className }) => {
  const year = new Date().getFullYear();
  return (
    <footer className={className}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © ${year} by `}
        <Link color="inherit" href="https://www.umair.dev/">
          Umair Ahmed
        </Link>
      </Typography>
    </footer>
  );
};
