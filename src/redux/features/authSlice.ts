import { createSlice } from '@reduxjs/toolkit';
import { storage } from '../../utils/mmvk';

 type UserType = {
    userInfo: {
        _id: string;
        username: string;
        email: string;
        isAdmin: boolean;
    } | null
  };


const initialState: UserType = {
    userInfo : storage.getString('userInfo') ? JSON.parse( storage.getString('userInfo')! ) : null,
};

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        setCredentials: (state, action)=>{
            state.userInfo = action.payload;
            storage.set('userInfo', JSON.stringify(action.payload));
            const expirationTimes = new Date().getTime() + 30 * 24 * 60 * 1000;
            storage.set('expirationTime', expirationTimes);
        },

        logout: (state)=>{
            state.userInfo = null;
            storage.clearAll();
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

