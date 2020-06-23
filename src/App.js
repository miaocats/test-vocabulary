import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Start from "./components/Start";
import Test from "./components/Test";
import Finish from "./components/Finish";

function App() {

  
  
  const [showScore,setShowScore]=useState(Array);
  const handleLastScore = (e)=>{

    if(e>1000){
    setShowScore(e.toString().split('').map(Number));

    }else if (e>0){
      let b = e.toString().split('');
      b.unshift('0');
      setShowScore(b.map(Number));
    }else {
      setShowScore([0,0,0,0]);
    }
  };
  console.log("this is showScore"+ showScore);
 
  return (
    <Router>
    <Switch>
            <Route exact path="/"  component={Start}>
              
            </Route>
            <Route path="/test" component={Test}>
              <Test  handleLastScore={handleLastScore}/>
            </Route>
            <Route path="/finish" component={Finish}>
              <Finish  showScore={showScore}/>
            </Route>
          </Switch>
    </Router>
    
  );
}

export default App;
