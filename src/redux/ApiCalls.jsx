import { publicBaseUrl } from "../axios"
import { loginFailure, loginStart, loginSuccess } from "./UserSlice"

export const login= async (dispatch,user)=>{
    dispatch(loginStart())
    try {
        const res = await publicBaseUrl.post("/user/auth/login",user)
       res.data && dispatch(loginSuccess(res.data))
       

        
    } catch (error) {
        dispatch(loginFailure())
        
    }
}