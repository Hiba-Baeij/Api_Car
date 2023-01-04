import { AuthController } from "../../api/User/index"
import { Register, Login } from "../../api/User/dto"
import { createAsyncThunk, createSlice, AnyAction } from '@reduxjs/toolkit';
import { axiosIns } from '@/libs/axios';

export const initialState = {
    notificationHidden: false,
    userDto: {
        userName: '',
        password: '',
        phonNumber: '',
        // token: '',
    }
}
//register 
export const register = createAsyncThunk('signup', async (payload: Register) => {
    try {
        const res = await axiosIns.post(AuthController.register, payload);
        console.log(res.data);
        if (res.status == 200) {

        }
        return res.data
    }

    catch (er) {
        throw er
    }

})
export function openNotification(payload: boolean) {
    initialState.notificationHidden = payload
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {


    },

    extraReducers(builder) {
        // [register.pending]:(state: { loading: boolean; }, action: any) => {
        //     state.loading = true;
        // }
        // [register.fulfilled]:(state: { loading: boolean; error: any; msg: any; }, { payload: { error, msg } }: any) => {
        //     state.loading = false;
        //     if (error)
        //         state.error = error;
        //     else state.msg = msg

        // }
        // [register.rejected]:(state: { loading: boolean; }, action: any) => {
        //     state.loading = true;
        // }
        builder.addCase(register.fulfilled, (state, action: AnyAction) => {
            console.log(action);
            state.userDto = action.payload
        })
    },


})

export const authReducer = authSlice.reducer;
