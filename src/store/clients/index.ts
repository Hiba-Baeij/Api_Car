import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Clients } from "@/api/Clients/dto"
export interface carState {
    clients: Clients[],
    clientFormModal: boolean,
}

const initialState: carState = {
    clients: [],
    clientFormModal: false,
}

const clientSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        setClientsList: (state: carState, action: PayloadAction<Clients[]>) => {
            state.clients = action.payload
        },
        setClientModal: (state: carState, action: PayloadAction<boolean>) => {
            state.clientFormModal = action.payload
        }
    },
})

export default clientSlice.reducer
export const ClientActions = clientSlice.actions