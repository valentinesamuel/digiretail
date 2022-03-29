import axios from "axios";
import { Dispatch } from "redux";
import * as userActionTypes from "./UserActionTypes";

export const GetUsers = () => async (dispatch: Dispatch<userActionTypes.UserDispatchTypes>) => {

      try {
            dispatch({
                  type: userActionTypes.USER_LOADING
            })

            const res = await axios.get("https://jsonplaceholder.typicode.com/users")

            dispatch({
                  type: userActionTypes.USER_SUCCESS,
                  payload: res.data
            })
      } catch (error) {
            dispatch({
                  type: userActionTypes.USER_FAIL
            })
      }

}