import {
  TRANSACTION_FAILED,
  TRANSACTION_START,
  TRANSACTION_SUCCESS,
  NULLIFY_ERROR,
} from '../types';

const INITIAL_STATE = {
  transactionList: [],
  loading: false,
  error: false,
  message: '',
};

export const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRANSACTION_START:
      return {
        ...state,
        loading: true,
      };
    case TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        transactionList: action.payload,
      };
    case TRANSACTION_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload,
      };
    case NULLIFY_ERROR:
      return {
        ...state,
        error: false,
        message: '',
      };
    default:
      return state;
  }
};
