import axios from 'axios';
import {local} from '../../../localip';
import {
  FETCH_FAILED,
  FETCH_START,
  FETCH_SUCCESS,
  UPLOAD_SUCCESS,
} from '../types';

const url = `${local}/product`;

export const fetchProductAction = ({search}) => {
  return async (dispatch) => {
    try {
      dispatch({type: FETCH_START});
      const response = await axios.get(`${url}?name=${search}`);
      dispatch({type: FETCH_SUCCESS, payload: response.data});
    } catch (err) {
      dispatch({type: FETCH_FAILED, payload: err.response.data.error});
    }
  };
};

export const uploadPhotoAction = ({
  name,
  price,
  description,
  categoryID,
  photo,
}) => {
  return async (dispatch) => {
    try {
      dispatch({type: FETCH_START});
      const headers = {
        headers: {
          'Content-Type': 'application/form-data',
        },
      };
      const formData = new FormData();
      const image = {
        uri: photo.path,
        type: 'image/jpeg',
        name: 'photo.jpeg',
      };
      formData.append('image', image);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('categoryID', categoryID);

      await axios.post(`${url}/image`, formData, headers);
      dispatch({type: UPLOAD_SUCCESS});
    } catch (err) {
      dispatch({type: FETCH_FAILED, payload: err.response.data.error});
    }
  };
};
