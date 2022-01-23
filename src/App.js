import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
