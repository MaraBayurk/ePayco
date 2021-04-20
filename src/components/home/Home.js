import React, { useEffect, useState } from "react";
import styles from './home.module.scss';
import { useHistory } from "react-router-dom";

export default function Home(){

    const[ state, setState]= useState(true)
    const[ estado, setEstado]= useState({
        input:""
    })

    function handleInputChange(e){
        setEstado({[e.target.name]: e.target.value})
    }

    const history= useHistory()
    
    return (
        <div className={styles.container}>
        
        <body class="text-center vsc-initialized" className={styles.containerForm} > 
            <main class="form-signin">
            <form>
                <img class="mb-4 text-center" src="https://multimedia-epayco.s3.amazonaws.com/dashboard/recaudo/logos/28770_proyecto_29_1563401775.png" alt="" width="57" height="57"/>
                <div>
                    <button class="w-50 btn btn-lg border-bottom fs-6" type="button" onClick={()=> {
                        setState(true)
                        setEstado({input:""})        
                    }
                        }>Ingrese sus datos</button>
                    <button class="w-50 btn btn-lg border-bottom fs-6" type="button" onClick={()=>{
                        setState(false) 
                        setEstado({input:""})        
                    }
                }>Pagos automaticos</button>
                </div> 
                {
                    state?
                    <>
                    <h1 class="h5 my-4 fw-normal">Consulte sus facturas</h1>
    
                    <div class="form-floating my-4">
                        <input type="text" class="form-control" id="floatingInput" placeholder="123456" name="input" value={estado.input} onChange={handleInputChange}/>
                        <label for="floatingInput">Número de identificación del usuario</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="button"  onClick={()=> history.push('/facturas')}>Continuar</button>
                    </>
                    :
                    <>
                    <h1 class="h5 my-4 fw-normal">Suscriba sus facturas para pagos automáticos</h1>
    
                    <div class="form-floating my-4">
                        <input type="text" class="form-control" id="floatingInput" placeholder="123456"  name="input" value={estado.input} onChange={handleInputChange}/>
                        <label for="floatingInput">Id Cliente: Número de identificación del usuario</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" disabled type="button"  onClick={()=> history.push('/facturas')}>Continuar</button>
                    </>
                }
            </form>
            </main>
    </body>
                <p class="mt-1 mb-3 text-muted" >Los pagos son procesados de forma segura por ePayco</p>

        </div>
    );
};
