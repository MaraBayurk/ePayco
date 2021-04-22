import { TOKEN, PROJECT_CONFIG, ALL_BILLS, CLEAR_ALL_BILLS, ONE_BILL, CLEAR_BILL, LOADING_TRUE, LOADING_FALSE } from './Constants'

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

    case PROJECT_CONFIG:
      return {
        ...state,
        projectConfig: action.payload
      }

    case ALL_BILLS:
      return {
        ...state,
        bills: action.payload
      }

    case CLEAR_ALL_BILLS:
      return {
        ...state,
        bills: []
      }

    case CLEAR_BILL:
      return {
        ...state,
        bill: []
      }

    case ONE_BILL:
      return {
        ...state,
        bill: action.payload
      }

    case LOADING_TRUE:
      return {
        ...state,
        loading: true
      }
    case LOADING_FALSE:
      return {
        ...state,
        loading: false
      }

    default:
      return state;
  }
};