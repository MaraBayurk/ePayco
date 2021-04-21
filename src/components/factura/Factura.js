import styles from './factura.module.scss'
import { useHistory } from "react-router-dom";
import { useEffect} from 'react';
import { clearBill, projectConfig } from '../../redux/Actions';
import { useDispatch, useSelector } from 'react-redux';


export default function Factura(props){

    const history= useHistory()
    const dispatch =useDispatch()

    const config = useSelector((store) => store.red.projectConfig);
    const bills = useSelector((store) => store.red.bills);
    const bill = useSelector((store) => store.red.bill);


    let id= props.match.params.id

    useEffect(()=>{
        dispatch( projectConfig())
    },[])

    // useEffect(()=>{
    //     bill.length!==1 && history.push("/")
    // },[])

    let goBackPage= ()=>{
        dispatch(clearBill())
        history.goBack()    
    }

    return(
        console.log("facrua", bill),
        bill.length === 1?
        <div className={styles.container}>
             <div className={styles.containerTitle}>
                <i class="fas fa-arrow-left" onClick={()=> goBackPage()}></i>
                <h4>Factura {id}</h4>
            </div>

            <h4>Descripcion</h4>
            <div className={styles.contentTable}>   
            {
                config.length>0 && config.map((name)=>(
                <div key={name.key}> 
                    <h5>{name.name}</h5> 
                    <h5 className={styles.info}>{bill[0][name.key]? bill[0][name.key] :"------"}</h5>
                </div>
             ))
            }

             </div>
            <div class="m-3">
                <button class="btn btn-outline-primary btn-lg"> <i class="fas fa-cloud-download-alt"></i> Descargar</button>
            </div>

            <div className={styles.containerButtons}  >
                <button class="btn">Pagar Factura</button>
                <button class="btn">Suscribir Factura</button>
            </div>

            <label>Si tiene alguna duda puede escribir a felipemesa14@gmail.com, o llamar al (57) 3024133765</label>
        </div>
        :
        <div>error</div>
    )
}