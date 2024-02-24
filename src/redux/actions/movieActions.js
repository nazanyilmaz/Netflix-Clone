import axios from "axios";
import { ActionTypes } from "../actionTypes";
import { options } from "../../constant/index";

export const getPopular = () => (dispatch) => {
  dispatch({ type: ActionTypes.MOVIES_LOADING });

  axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVIES_SUCCESS,
        payload: res.data.results,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIES_ERROR,
        payload: err.message,
      })
    );
};
