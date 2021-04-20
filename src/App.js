import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Facturas from './components/facturas/Facturas';
import Factura from './components/factura/Factura';

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/facturas' component={Facturas} />
        <Route exact path='/factura/:id' component={Factura} />

    </BrowserRouter >
  );
}

export default App;
