import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = { name: "test", age: 0, email: "test@test.com" };

//here you will create your "store" for each state that you need to manage
export const userSlice = createSlice({
  //name of this state management
  name: "user",
  // initial state is an object because we need to store different user info at each time
  initialState: { value: initialStateValues },
  reducers: {
    // write down the different functions that we might use to alter our app
    //(what action might cause the state to be updated)

    //a login function that will update the state
    //state: literally holds the current state
    //action: takes a payload that will alter the current state
    login: (state, action) => {
      //updating the state to what was added into the payload
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValues;
    },
  },
});

//you can access the payload in here too by calling .actions
//call login in the place where you want to alter the state (login component)
export const { login, logout } = userSlice.actions;

// why need to call this again?
// so that you can access it in your configure store function
// which allows you to access the state from anywhere in the app
export default userSlice.reducer;
