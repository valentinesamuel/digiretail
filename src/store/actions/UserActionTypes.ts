export const USER_LOADING = "USER_LOADING"
export const USER_FAIL = "USER_FAIL"
export const USER_SUCCESS = "USER_SUCCESS"
export const ADD_USER = "ADD_USER"


export interface IUser {
      id: number
      name: string
      username: string
      email: string
      address: object
      phone: string
      website: string
      company: object
}


export interface UserLoading{
      type: typeof USER_LOADING
}
export interface UserFail{
      type: typeof USER_FAIL
}
export interface UserSuccess{
      type: typeof USER_SUCCESS,
      payload: IUser[]
}
export interface AddUser{
      type: typeof ADD_USER,
      payload: IUser[]
}



export type UserDispatchTypes = UserLoading | UserFail | UserSuccess | AddUser 