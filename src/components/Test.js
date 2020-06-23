import React, { useState ,useEffect} from "react";
//import "./App.css";
import {
  
  useHistory,
} from "react-router-dom";
//import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
//import Card from "@material-ui/core/Card";
//import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
//import Appbar from "@material-ui/core/Appbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";

function Test({ handleLastScore }) {
  const wordList = [
    ["b1", "a1"],
    ["b2", "a2"],
    ["b3", "a3"],
    ["b4", "a4"],
    ["b5", "a5"],
    ["b6", "a6"],
    ["b7", "a7"],
    ["b8", "a8"],
    ["b9", "a9"],
    ["b10", "a10"],
    ["b11", "a11"],
    ["b12", "a12"],
    ["b13", "a13"],
    ["b14", "a14"],
    ["b15", "a15"],
    ["b16", "a16"],
    ["b17", "a17"],
    ["b18", "a18"],
    ["b19", "a19"],
    ["b20", "a20"],
    ["b21", "a21"],
  ];

  // const [currentWord, setCurrentWord] = useState(wordList[0][0]); //no use?

  const [answerList, setAnswerList] = useState(["a1", "a4", "a5", "a2"]);

  const [currentTimes, setCurrentTimes] = useState(0);

  const [score, setScore] = useState(0);

  const handleAnswerList = () => {
   // console.log("this is answer currentTimes=" + currentTimes);
    let a = Math.floor(Math.random() * 16);
    let b;
    let c;
    let d;
    //console.log("this is ------a" + a);

    if (a < 6) {
      b = a + 1;
      c = a + 2;
      if (currentTimes !== a && currentTimes !== b && currentTimes !== c) {
        d = Math.floor(Math.random() * 3);
        let theThreeAnswerList;
        theThreeAnswerList = [wordList[a][1], wordList[b][1], wordList[c][1]];
        theThreeAnswerList.splice(d, 0, wordList[currentTimes + 1][1]);
        setAnswerList(theThreeAnswerList);
        //console.log('111111');
      } else {
        let theThreeAnswerList = [
          wordList[a][1],
          wordList[b][1],
          wordList[c][1],
          wordList[c + 1][1],
        ];
        setAnswerList(theThreeAnswerList);
        //console.log("222222222222");
      }

      // console.log(answerList);
      // console.log(typeof(answerList));
      // console.log(number);
    } else {
      b = a - 1;
      c = a - 2;
      if (currentTimes !== a && currentTimes !== b && currentTimes !== c) {
        d = Math.floor(Math.random() * 3);
        let theThreeAnswerList;
        theThreeAnswerList = [wordList[a][1], wordList[b][1], wordList[c][1]];
        theThreeAnswerList.splice(d, 0, wordList[currentTimes + 1][1]);
        setAnswerList(theThreeAnswerList);
        // console.log('111111');
      } else {
        let theThreeAnswerList = [
          wordList[a][1],
          wordList[b][1],
          wordList[c][1],
          wordList[c - 1][1],
        ];
        setAnswerList(theThreeAnswerList);
        //console.log("222222222222");
      }
    }
  };
  const [firstStyle, setFirstStyle] = useState();
  const [secondStyle, setSecondStyle] = useState();
  const [thirdStyle, setThirdStyle] = useState();
  const [fourthStyle, setFourthStyle] = useState();
  const [fifthStyle, setFifthStyle] = useState();
  const [sixthStyle, setSixthStyle] = useState();

  const wrongStyle = {
    border: "red 1px solid",
    backgroundColor: "red",
  };

  const rightStyle = {
    backgroundColor: "lightgreen",
  };
  const greyStyle = {
    backgroundColor: "grey",
  };

  const handleColor = (number) => {

//console.log("this is" + wordList[currentTimes][1])

    if (answerList[0] === wordList[currentTimes][1]) {
      setFirstStyle(rightStyle);
    } else if (number === answerList[0]) {
      setFirstStyle(wrongStyle);
    } else {
      setFirstStyle(greyStyle);
    }

    if (answerList[1] === wordList[currentTimes][1]) {
      setSecondStyle(rightStyle);
    } else if (number === answerList[1]) {
      setSecondStyle(wrongStyle);
    } else {
      setSecondStyle(greyStyle);
    }

    if (answerList[2] === wordList[currentTimes][1]) {
      setThirdStyle(rightStyle);
    } else if (number === answerList[2]) {
      setThirdStyle(wrongStyle);
    } else {
      setThirdStyle(greyStyle);
    }

    if (answerList[3] === wordList[currentTimes][1]) {
      setFourthStyle(rightStyle);
    } else if (number === answerList[3]) {
      setFourthStyle(wrongStyle);
    } else {
      setFourthStyle(greyStyle);
    }
    setFifthStyle(greyStyle);
    setSixthStyle(greyStyle);

    setTimeout(() => {
      setFirstStyle(null);
      setSecondStyle(null);
      setThirdStyle(null);
      setFourthStyle(null);
      setFifthStyle(null);
      setSixthStyle(null);
      setProgress(0);
    }, 1000);
  };

  const history = useHistory();

  const handleClick = (number) => {
    handleColor(number);
    
    
    setTimeout(() => {
      handleAnswerList(wordList[currentTimes + 1][1]);
     // console.log("currentTime add 1");
    }, 1000);

    //console.log("this is number" + number);
    // console.log(
    // "this is wordList[currentTimes][1]" + wordList[currentTimes][1]
    //);

    if (number === wordList[currentTimes][1]) {
      if (currentTimes < 5) {
        setScore(score + 108);
      } else if (currentTimes < 10) {
        setScore(score + 356);
      } else if (currentTimes < 20) {
        setScore(score + 621);
      }
      handleLastScore(score);
      //console.log("this is score" + score);
    };
    if (number !== 19999){
    setProgress(0);
    //console.log('i am set progress');
    };
    // setAnswerList(
    //  answerList.splice(Math.floor(Math.random() * 2), 0, wordList[i][1])
    //);
    

    setTimeout(()=>{
      setCurrentTimes(currentTimes + 1);
     // console.log("currenttimes"+currentTimes+"--")
    if (currentTimes === 19) {
      history.push("/finish");
    }

    },1000);


    
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "space-between",
      //border: "1px solid red",
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
      backgroundColor: "lightblue",
      color: "white",
    },
    nextWord: {
      display: "flex",

      justifyContent: "space-between",
      alignItems: "space-between",
      minHeight: "3vh",
    },
  }));
  const classes = useStyles();

  const [progress, setProgress] = React.useState(5);

  



  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 5
      );
      
      
      
    }, 500);
    return () => {
     // console.log('')
      clearInterval(timer);
    };
  }, []);

  



  useEffect(() => {
      if(progress>=100){
      handleClick (9999);
      //console.log("testb is use---------------------");
      }
  },[progress]);
  




  const previousWord = () => {
    if (currentTimes === 0) {
      return "";
    } else {
      return wordList[currentTimes - 1][0];
    }
  };
  const futureWord = () => {
    if (currentTimes > 18) {
      return "";
    } else {
      return wordList[currentTimes + 1][0];
    }
  };

  return (
    <Box className={classes.root}>
      <Paper>
        <Typography variant="h6" className={classes.title}>
          Test Vocabulary
        </Typography>
        <Typography variant="h7" className={classes.title}>
          the vocabulary is ={parseInt(score * 0.9)}~{parseInt(score * 1.4)}
        </Typography>

        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          value={currentTimes * 5 + 5}
        />
        <div className={classes.nextWord}>
          <div>{previousWord()} </div>
          <div>{futureWord()}</div>
        </div>
      </Paper>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" className={classes.title}>
          {wordList[currentTimes][0]}
        </Typography>
        <CircularProgressWithLabel value={progress} />
      </Box>

      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper
              style={firstStyle}
              className={classes.paper}
              onClick={() => handleClick(answerList[0])}
            >
              {answerList[0]}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              style={secondStyle}
              className={classes.paper}
              onClick={() => handleClick(answerList[1])}
            >
              {answerList[1]}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              style={thirdStyle}
              className={classes.paper}
              onClick={() => handleClick(answerList[2])}
            >
              {answerList[2]}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              style={fourthStyle}
              className={classes.paper}
              onClick={() => handleClick(answerList[3])}
            >
              {answerList[3]}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={fifthStyle}  className={classes.paper} onClick={() => handleClick(5)}>
              dont know
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={sixthStyle} className={classes.paper} onClick={() => handleClick(6)}>
              wrong
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
export default Test;

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 21,
  },
  thumb: {
    display: "none",
    height: 14,
    width: 14,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 13,
    borderRadius: 4,
  },
  rail: {
    height: 13,
    borderRadius: 4,
  },
})(Slider);

function CircularProgressWithLabel(props) {
  return <CircularProgress variant="static" {...props} />;
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
