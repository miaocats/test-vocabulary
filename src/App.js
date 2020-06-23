import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Start from "./components/Start";
import Test from "./components/Test";
import Finish from "./components/Finish";

function App() {

  
  
  const [showScore,setShowScore]=useState(Array);
  const [showText,setShowText] = useState('a');
  const handleLastScore = (e)=>{

    if(e>1000){
    setShowScore(e.toString().split('').map(Number));
      setShowText("ccc");
    }else if (e>0){
      let b = e.toString().split('');
      b.unshift('0');
      setShowScore(b.map(Number));
      setShowText("bbb");
    }else {
      setShowScore([0,0,0,0]);
      setShowText("aaa");
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
              <Finish  showScore={showScore} showText={showText}/>
            </Route>
          </Switch>
    </Router>
    
  );
}

export default App;
