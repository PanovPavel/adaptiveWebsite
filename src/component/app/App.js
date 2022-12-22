import './App.css';
import Header from "../header/header";
import Description from '../description/description';
import Picture from "../picture/picture";
import Footer from "../footer/footer";
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Description></Description>
        <Picture></Picture>
        <Footer></Footer>
    </div>
  );
}

export default App;
