import axios from 'axios';
import { TOKEN, PROJECTCONFIG, ALLBILLS, CLEARALLBILLS, ONEBILL, CLEARBILL, LOADING_TRUE, LOADING_FALSE} from './Constants';

export const getToken = () => async (dispatch) => {
    try {
        let res= await axios.post("https://apify.epayco.co/login/mail",{},{
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        }  
      })


      dispatch({
        type: TOKEN,
        payload: res.data
    });

    } catch (error) {
        console.log("error obtener token", error)  
    }
}


export const projectConfig = () => async (dispatch, getState) => {
    try {
        let token = await getState().red.token;
        let res= await axios.post("https://apify.epayco.co//billcollect/proyect/config/consult",
        { projectId: process.env.REACT_APP_PROJECTID },
        { 
            headers: {
                'Authorization': `Bearer ${token.token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
      dispatch({
        type: PROJECTCONFIG,
        payload: res.data.data
    });

    } catch (error) {
        console.log("error en project Config", error)  
    }
}



export const allBills= (input) => async (dispatch, getState) => {

    try {
        dispatch(loadingTrue())
        let token =  getState().red.token;
        let res= await axios.post("https://apify.epayco.co/billcollect/invoices/consult",
            {
                projectId: process.env.REACT_APP_PROJECTID,
                document: input
            },
            { 
                headers: {
                'Authorization': `Bearer ${token.token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
            })
                        
        if(res.data.data.bills.length === 1) dispatch(oneBill(res.data.data.bills))
         else dispatch({
            type: ALLBILLS,
            payload: res.data.data.bills
        });
        dispatch(loadingFalse())
        } catch (error) {
                console.log("error en getBills", error)
            }
}


export const oneBill= (bill) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ONEBILL,
            payload: bill
        });
        } catch (error) {
                console.log("error en oneBill", error)
            }
}


export const clearBills= () => async (dispatch) => {
    try {
        dispatch({
            type: CLEARALLBILLS,
            payload: []
        });

        } catch (error) {
                console.log("error en clearBills", error)
            }
}


export const clearBill= () => async (dispatch) => {
    try {
        dispatch({
            type: CLEARBILL,
            payload: []
        });

        } catch (error) {
                console.log("error en CLEARBILL", error)
            }
}

export const loadingTrue= () => async (dispatch) => {
    try {
        dispatch({
            type: LOADING_TRUE,
            payload: []
        });

        } catch (error) {
                console.log("error en LOADING_TRUE", error)
            }
}
export const loadingFalse= () => async (dispatch) => {
    try {
        dispatch({
            type: LOADING_FALSE,
            payload: []
        });

        } catch (error) {
                console.log("error en LOADING_FALSE", error)
            }
}