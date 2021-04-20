import styles from './factura.module.scss'
import { useHistory } from "react-router-dom";

export default function Factura(props){
    const history= useHistory()

let id= props.match.params.id

let factura={
    codigoEmpresa:123,
    vencimiento:"12/12/20",
    facturacion:123456,
    identificacionUsuario:123456,
    factura:123456,
    periodosFacturados:12,
    valor:"$10000 COP"

}
    return(
        <div className={styles.container}>
             <div className={styles.containerTitle}>
                <i class="fas fa-arrow-left" onClick={()=> history.goBack()}></i>
                <h4>Factura {id}</h4>
            </div>

            <h4>Descripcion</h4>

            <div className={styles.contentTable}>
                <div>
                    <h5>Codigo empresa</h5>
                    <h5 className={styles.info}>{factura.codigoEmpresa}</h5>
                </div>
                <div>
                    <h5>Fecha vencimiento</h5>
                    <h5 className={styles.info}>{factura.vencimiento}</h5>
                </div>
                <div>
                    <h5>Fecha de facturación</h5>
                    <h5 className={styles.info}>{factura.facturacion}</h5>
                </div>
                <div>
                    <h5>Número de identificación del usuario</h5>
                    <h5 className={styles.info}>{factura.identificacionUsuario}</h5>
                </div>
                <div>
                    <h5>Número factura</h5>
                    <h5 className={styles.info}>{factura.factura}</h5>
                </div>
                <div>
                    <h5>Periodos facturados</h5>
                    <h5 className={styles.info}>{factura.periodosFacturados}</h5>
                </div>
                <div>
                    <h5>Valor</h5>
                    <h5 className={styles.info}>{factura.valor}</h5>
                </div>
             </div>
            <div class="m-3">
                <button class="btn btn-outline-primary btn-lg"> <i class="fas fa-cloud-download-alt"></i> Descargar</button>
            </div>

            <div className={styles.containerButtons}  >
                <button class="btn">Pagar Factura</button>
                <button class="btn">Suscribir factura</button>
            </div>

            <label>Si tiene alguna duda puede escribir a felipemesa14@gmail.com, o llamar al (57) 3024133765</label>
        </div>
    )
}