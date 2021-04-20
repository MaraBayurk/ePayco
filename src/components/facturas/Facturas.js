import styles from './facturas.module.scss'
import { useHistory } from "react-router-dom";

export default function Facturas(){

    const history= useHistory()

let facturas=[
    {
        id:1,
        valor: "10000 COP",
        numero:123456,
        vencimiento: "2099-04-15 23:59:59"
    },
    {
        id:2,
        valor: "50000 COP",
        numero:213456,
        vencimiento: "2099-06-25 23:59:59"
    },
    {
        id:3,
        valor: "90000 COP",
        numero:456789,
        vencimiento: "2099-10-01 23:59:59"
    }
]
    return(
    
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <i class="fas fa-arrow-left" onClick={()=> history.push("/")}></i>
                <h4>Lista de Facturas</h4>
            </div>
   
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Valor</th>
                    <th scope="col">Numero de Factura</th>
                    <th scope="col">Fecha de Vencimiento</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {facturas.map((factura)=>(
                    <tr key={factura.id} >
                        <td>{factura.valor}</td>
                        <td>{factura.numero}</td>
                        <td>{factura.vencimiento}</td>
                        <td><button class="btn btn-lg btn-outline-info" onClick={()=>history.push(`/factura/${factura.numero}`)}>Pagar factura</button></td>
                    </tr>

                ))}
            </tbody>
    </table>
        </div>

    )
}