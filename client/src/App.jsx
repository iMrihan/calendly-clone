import "./App.css";
import { AllRoutes } from "./components/AllRoutes/AllRoutes";
import {AfterLoginRoute } from "../src/components/AfterLoginRoute/AfterLoginRoute"
import {GoogleComp} from "../src/components/googleLoginComponents/GoogleComp"
import {useState, useEffect} from "react"

function App() {
  const token = localStorage.getItem('userToken') || null ;

  const [state, setState] = useState("")

 useEffect(() => {
    setState(token)
 },[])

  return <div>
    {state ? <AfterLoginRoute /> : <AllRoutes/>  }
    
  </div>;
}

export default App;
