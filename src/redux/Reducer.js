import { TOKEN, PROJECTCONFIG, ALLBILLS, CLEARALLBILLS, ONEBILL, CLEARBILL, LOADING_TRUE, LOADING_FALSE } from './Constants'

const initialState = {
  token: "",
  projectConfig: {},
  bills: [],
  bill: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.payload
      }

    case PROJECTCONFIG:
      return {
        ...state,
        projectConfig: action.payload
      }

    case ALLBILLS:
      return {
        ...state,
        bills: action.payload
      }

    case CLEARALLBILLS:
      return {
        ...state,
        bills: []
      }

    case CLEARBILL:
      return {
        ...state,
        bill: []
      }

    case ONEBILL:
      return {
        ...state,
        bill: action.payload
      }

    case LOADING_TRUE:
      return{
        ...state,
        loading:true
      }
      case LOADING_FALSE:
        return{
          ...state,
          loading:false
        }

    default:
      return state;
  }
};