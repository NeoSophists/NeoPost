import types from "./actionTypes";
import { getPosts } from "./services/graph";
import { post } from "./services/publication"

export const applyMiddleware = (dispatch) => (action) => {
  switch (action.type) {
    case types.PostPublication.POST_REQUEST:
      return post(action.payload).then((res) => {
        dispatch({
          type: types.PostPublication.POST_SUCCESS,
          payload: res,
        });
      }).catch((err) => {
        
        dispatch({
          type: types.PostPublication.POST_FAILURE,
          payload: err.response,
        });
      });
    case types.GetPublications.GET_PUBLICAION_REQUEST:
        return getPosts().then((res) => {
          dispatch({
            type: types.GetPublications.GET_PUBLICAION_SUCCESS,
            payload: res,
          });
        }).catch((err) => {
          
          dispatch({
            type: types.GetPublications.GET_PUBLICAION_FAILURE,
            payload: err.response,
          });
        });
    default:
      dispatch(action);
  }
};
