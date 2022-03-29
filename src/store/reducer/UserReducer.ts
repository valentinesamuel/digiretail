import { IUser } from "../actions/UserActionTypes"
import * as userActionTypes from "../actions/UserActionTypes";


interface IDefaultState {
      loading: boolean,
      users?: IUser[]
}

const defaultState: IDefaultState = {
      loading: false,
      users: [
            {
                  id: 1,
                  name: "Valentine",
                  username: "@Valrenic2",
                  email: "valentinesamuel080@gmail.com",
                  address: {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        geo: {
                              "lat": "-37.3159",
                              "lng": "81.1496"
                        }
                  },
                  phone: "2536326234",
                  website: "valentinesamuel.vercel.app",
                  company: {
                        name: "freelance",
                        catchPhrase: "Muf",
                        bs: "sdhgsrofm"
                  }
            },
      ]
}

const UserReducer = (state: IDefaultState = defaultState, action: userActionTypes.UserDispatchTypes): IDefaultState => {
     switch (action.type) {
           case userActionTypes.USER_FAIL:
                 return {
                       loading: false,
                       
                 }
           case userActionTypes.USER_LOADING:
                 return {
                       loading:true,
                 }
           case userActionTypes.USER_SUCCESS:
                 
                 return {
                       loading:false,
                       users: action.payload
                 }
     
           default:
                return state
     }
}

export default UserReducer