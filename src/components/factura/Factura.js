import styles from './factura.module.scss'
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { clearBill } from '../../redux/Actions';
import { useDispatch, useSelector } from 'react-redux';


export default function Factura(props) {

    const history = useHistory()
    const dispatch = useDispatch()

    const config = useSelector((store) => store.red.projectConfig);
    const bill = useSelector((store) => store.red.bill);

    let id = props.match.params.id

    useEffect(() => {
        bill.length === 0 && history.push("/")
    }, [])

    let goBackPage = () => {
        dispatch(clearBill())
        history.goBack()
    }

    return (
        bill.length === 1 ?
            <div className={`${styles.container} change `}>
                <div className={styles.containerTitle}>
                    <i className="fas fa-arrow-left" onClick={() => goBackPage()}></i>
                    <h4>Factura {id}</h4>
                </div>
                <div className={styles.downloadContainer}>
                    <h4>Descripcion</h4>
                    <i className="fas fa-cloud-download-alt"></i>
                </div>
                <div className={styles.contentTable}>
                    {
                        config.length > 0 && config.map((name) => (
                            name.key === "amountFirst" ?
                                <div key={name.key} className={styles.amount}>
                                    <h5 >{name.name}</h5>
                                    <label>$ {bill[0][name.key]} COP</label>
                                </div>
                                :
                                <div key={name.key} className={styles.rows}>
                                    <h5>{name.name}</h5>
                                    <label className={styles.info}>{bill[0][name.key] ? bill[0][name.key] : "------"}</label>
                                </div>
                        ))
                    }
                </div>
                <div className={styles.containerButtons}  >
                    <button className="btn">Pagar</button>
                    <button className="btn">Suscribir</button>
                </div>
                <label>Si tiene alguna duda puede escribir a
                <a href="mailto:info@epayco.com" target="_blank" rel="noreferrer">
                        info@epayco.com
                </a>
                , o llamar al
                <a href="tel: +573024133765">
                        (57) 3024133765
                </a>
                </label>
            </div>
            :
            <div>error</div>
    )
}