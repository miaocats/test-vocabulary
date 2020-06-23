import React from "react";
//import "./App.css";
import {  useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
//import { lightBlue } from "@material-ui/core/colors";

function Start() {



  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      //flexDirection: "column",
      //flex: '1 0 auto',
    },
    box: {
      //backgroundColor: "red",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: '100vh',
      //border: "1px solid red"
    },
    card: {
      display: "flex",
      //border: "1px solid red",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: '40vh',
      backgroundColor: 'lightblue'
      
    }
  }));
  const classes = useStyles();
  const history = useHistory();

  return (
      <Box className={classes.box}>
        <Card className={ classes.card}>
          <CardContent bgcolor="blue">
            <Typography variant="h5" color="primary">
              VOCABULARY TEST
            </Typography>
          </CardContent>
          
          
            <Button variant="contained" color="primary" onClick={()=>{history.push("/test");}}>
              Start
            </Button>
           
       
        </Card>
      </Box>
  );
}

export default Start;
