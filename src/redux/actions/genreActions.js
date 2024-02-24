import { ActionTypes } from "../actionTypes";
import axios from "axios";
import { options } from "../../constant/index";

export const getGenres = () => (dispatch) => {
  //Api istegi atildigini reducea haber ver
  dispatch({ type: ActionTypes.GENRES_LOADING });

  //api istegi at
  axios
    .get("https://api.themoviedb.org/3/genre/movie/list", options)

    //veri gelirse reducura haber ver
    .then((res) =>
      dispatch({ type: ActionTypes.GENRES_SUCCESS, payload: res.data.genres })
    )

    // veri gelmezse reducura haber ver
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRES_ERROR,
        payload: err.message,
      })
    );
};
