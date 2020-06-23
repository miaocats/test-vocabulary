import React from "react";
//import "./App.css";
import {   useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";



function Finish({showScore,showText}) {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "space-between",
         // border: "2px solid red",
          minHeight: "97vh",
          maxHeight: "97vh",
          flexDirection: "column",
          padding: "3vh",
          //flex: '1 0 auto',
        },
        box: {
          //backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          //border: "1px solid red"
        },
        title: {
          textAlign: "center",
          minHeight: "5vh",
          backgroundColor: "white",
          color: "black",
        },
        paper: {
          display: "flex",
    
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "5vh",
        },
        nextWord: {
          display: "flex",
    
          justifyContent: "space-between",
          alignItems: "space-between",
          minHeight: "3vh",
        },
        button:{
            color: "blue",
            background: "white",
            marginTop: "1vh"
        }
      }));
  const classes = useStyles();

  
  const history = useHistory();
  const gogo = () => {
    
      history.push("/test");
    
  };


  const divStyle = {
      display: "flex",
      flexDirection: "row",
      listStyle: "none",
      height: "13vh",
      justifyContent: "space-around",
      //padding: "0",
      alignItems: "center",
      backgroundColor: "gray",
      color: "white",
      //textAlign: "center",
      fontSize: "9vh",
  }
  const lineStyle={
    borderLeft: "0.3vh solid white",
    height: "7vh",
  }
  const numberStyle={
      height: "12vh",
     // border: '1px solid red '
  }

 
 

  return (
    <Box className={classes.root}>
        <Paper> 
            <Typography variant="h6" className={classes.title}>
          Test Vocabulary
        </Typography>
        </Paper>
      

        <paper>
  <Typography variant="h6" align="center">your vocabulary is{showScore}</Typography>
        <div style={divStyle}>
                <div style={numberStyle}>{showScore[0]}</div>
                <div style={lineStyle}></div>
                <div style={numberStyle}>{showScore[1]}</div>
                <div style={lineStyle}></div>
                <div style={numberStyle}>{showScore[2]}</div>
                <div style={lineStyle}></div>
                <div style={numberStyle}>{showScore[3]}</div>
            </div>
  <p> hello{showText}, uopur em alefe wfjew iofjeiw ojf id oswj fieowjfiwsoe dfj sw do </p>
        </paper>


        <Paper>
            <Button variant="contained" color="primary" fullWidth="true">share</Button>
            <Button className={classes.button} variant="contained" color="primary" onClick={gogo} fullWidth="true">back</Button>
        </Paper>
    
      
    </Box>
  );
}

export default Finish;
