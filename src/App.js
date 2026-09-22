import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';


function App(props) {
  return (
    <>
      <Header/>
      {props.children}
      
      <Footer/>
    </>
  );
}

export default App;
