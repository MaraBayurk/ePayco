import React, { useEffect,  useState } from "react";
import styles from './home.module.scss';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { allBills, getToken, projectConfig } from "../../redux/Actions";

export default function Home() {

    const history = useHistory()
    const dispatch = useDispatch()

    let bills = useSelector((store) => store.red.bills);
    let bill = useSelector((store) => store.red.bill);
    let config = useSelector((store) => store.red.projectConfig);
    let loading = useSelector((store) => store.red.loading);
    
    const [state, setState] = useState(true)
    const [estado, setEstado] = useState({
        input: ""
    })
    const [modal, setModal] = useState(false)

    function handleInputChange(e) {
        setEstado({ [e.target.name]: e.target.value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(allBills(estado.input))
    }

    useEffect(async () => {
        await dispatch(getToken())
        await dispatch(projectConfig())
    }, [])

    let [count, setCount] = useState(0)


    useEffect(() => {
        if (count !== 0) {
            if (bill.length === 1) {
                history.push("/factura/" + bill[0].document)
            } else if (bills.length > 1) {
                history.push("/facturas")
            } else {
                setModal(true)
            }
        }
        setCount(count + 1)
    }, [bills, bill])

    


    return (
        <>
            <div className={`${styles.container} change `} >
                <div className="text-center vsc-initialized" className={styles.containerForm} >
                    <main className="form-signin">
                        <form onSubmit={handleSubmit}>
                            <img
                                className={"mb-4 text-center " + styles.logo_commerce}
                                src="https://1000marcas.net/wp-content/uploads/2020/10/Movistar-Logo.png"
                                alt="movistar_logo"
                            />
                            <div>
                                <button className="w-50 btn btn-lg border-bottom fs-6" type="button"
                                    onClick={() => {
                                        setState(true)
                                        setEstado({ input: "" })
                                    }
                                    }>Ingrese sus datos</button>
                                <button className="w-50 btn btn-lg border-bottom fs-6" type="button"
                                    onClick={() => {
                                        setState(false)
                                        setEstado({ input: "" })
                                    }
                                    }>Pagos automaticos</button>
                            </div>
                            {
                                state ?
                                    <>
                                        <h1 className="h5 my-4 fw-normal">Consulte sus facturas</h1>

                                        <div className="form-floating my-4">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="123456" name="input" value={estado.input} onChange={handleInputChange} />
                                            {
                                                config.length > 0 && config.map((title,i) => (
                                                    <label key={i} htmlFor="floatingInput">{title.consult === true ? title.name : ""}</label>
                                                ))
                                            }
                                        </div>
                                        <button
                                            className={`w-100 btn btn-lg ${styles.buttonContinue}`}
                                            type="submit"

                                        >
                                            {
                                                !loading ?
                                                    "Continuar"
                                                    :
                                                    <div className="spinner-grow text-secondary" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                            }

                                        </button>

                                    </>
                                    :
                                    <>
                                        <h1 className="h5 my-4 fw-normal">Suscriba sus facturas para pagos autom??ticos</h1>
                                        <div className="form-floating my-4">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="123456" name="input" value={estado.input} onChange={handleInputChange} />
                                            <label htmlFor="floatingInput">N??mero de identificaci??n del usuario</label>
                                        </div>
                                        <button className="w-100 btn btn-lg btn-primary" disabled type="button" onClick={() => history.push('/facturas')}>Continuar</button>
                                    </>
                            }
                        </form>
                    </main>
                </div>
            </div>
            <div onClick={() => setModal(false)} className={modal ? `${styles.info_modal_active}` : styles.info_modal}>
                <div>
                    <i className="far fa-times-circle" onClick={() => setModal(false)}></i>
                    <p>No cuenta con facturas pendientes por pagar.</p>

                </div>
            </div>
        </>
    );
};
