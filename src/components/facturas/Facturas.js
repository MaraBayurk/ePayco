import styles from './facturas.module.scss'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearBills, oneBill } from '../../redux/Actions';
import { useEffect } from 'react';

export default function Facturas(){

    const history= useHistory()
    const dispatch= useDispatch()
    const bills = useSelector((store) => store.red.bills);

    let goBackPage= ()=>{
        dispatch(clearBills())
        history.push("/")
    }

    useEffect(()=>{
        bills.length<1 && history.push("/")
    },[])

    let onChangeClick = (factura, docu)=>{
        dispatch(oneBill(factura))
        history.push("/factura/"+docu)
        console.log("estor en elc lick", factura)
    }

    return(
    
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <i class="fas fa-arrow-left" onClick={()=> goBackPage()}></i>
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
                {bills.length>0 && bills.map((factura, index)=>(
                    <tr key={index+1} >
                        <td>`${factura.amountFirst} COP`</td>
                        <td>{factura.document}</td>
                        <td>{factura.billDate}</td>
                        <td><button class="btn btn-lg btn-outline-info" onClick={()=> onChangeClick([factura], factura.document)}>Pagar factura</button></td>
                    </tr>

                ))}
            </tbody>
    </table>
        </div>

    )
}