import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isAuthenticated: boolean;
    role: 'patient' | 'professional' | 'admin' | 'nurse' | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    role: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ role: 'patient' | 'professional' | 'admin' | 'nurse'}>) => {
            state.isAuthenticated = true;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.role = null;
        },
    },
});

export const {login, logout } = authSlice.actions;
export default authSlice.reducer;