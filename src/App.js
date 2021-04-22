import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Facturas from './components/facturas/Facturas';
import Factura from './components/factura/Factura';

function App() {
  return (
    <>
      <BrowserRouter>
        <section className="sectionContainer">
          <div
            className="containerImg"
            style={{
              backgroundImage:
                "url(https://multimedia-epayco.s3.amazonaws.com/dashboard/recaudo/proyecto/imagenes/plantilla_1.png) "
            }}
          ></div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/facturas' component={Facturas} />
            <Route exact path='/factura/:id' component={Factura} />
          </Switch>
          <div className="footer-page">
            <div>
              <p className="mt-1 mb-3 text-muted" >
                <img alt="epayco_secure" src="https://cdn.dribbble.com/users/4323/screenshots/3387007/secure_sized.gif" style={{ width: "2.5rem" }}></img>
                Los pagos son procesados de forma segura por ePayco</p>
            </div>
            <div>
              <img alt="epayco_logo" src="https://multimedia.epayco.co/dashboard/recaudo/proyecto/imagenes/logoepayco.png" style={{ height: "2rem", width: "auto", margin: "0.7rem" }} />
            </div>
          </div>
        </section>
      </BrowserRouter >
    </>
  );
}

export default App;