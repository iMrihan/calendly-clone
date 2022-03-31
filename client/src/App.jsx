import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Individuals } from "./components/Individuals/Individuals";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return <div>
    <Navbar/>
    <Individuals/>
    <Footer/>
  </div>;
}

export default App;
