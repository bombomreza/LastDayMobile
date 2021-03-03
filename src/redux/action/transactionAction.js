import axios from 'axios';
import {local} from '../../../localip';
import {
  TRANSACTION_FAILED,
  TRANSACTION_SUCCESS,
  TRANSACTION_START,
} from '../types';

const url = `${local}/transaction`;

export const postTransactionAction = ({userID, items}) => {
  return async (dispatch) => {
    try {
      dispatch({type: TRANSACTION_START});
      await axios.post(`${url}/${userID}`, {items});
      dispatch(fetchTransactionAction(userID));
    } catch (err) {
      dispatch({type: TRANSACTION_FAILED, payload: err.response.data.error});
    }
  };
};

export const fetchTransactionAction = (id) => {
  return async (dispatch) => {
    try {
      console.log(id);
      dispatch({type: TRANSACTION_START});
      const response = await axios.get(`${url}/${id}`);
      dispatch({type: TRANSACTION_SUCCESS, payload: response.data});
    } catch (err) {
      dispatch({type: TRANSACTION_FAILED, payload: err.response.data.error});
    }
  };
};
