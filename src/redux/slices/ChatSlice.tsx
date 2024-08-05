import { createSlice } from '@reduxjs/toolkit';

export interface ChatStateType {
  selectedUser: string | null;
  messages: {
    [key: string]: string[];
  };
}

const initialState: ChatStateType = {
  selectedUser: null,
  messages: {},
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    sendMessage: (state, action) => {
      const { userId, message } = action.payload;
      if (!state.messages[userId]) {
        state.messages[userId] = [];
      }
      state.messages[userId].push(message);
    },
  },
});

export const { selectUser, sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
