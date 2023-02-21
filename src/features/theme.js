import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = "black";

//here you will create your "store" for each state that you need to manage
export const themeSlice = createSlice({
  //name of this state management
  name: "theme",
  // initial state is an object because we need to store different user info at each time
  initialState: { value: initialStateValues },
  reducers: {
    // write down the different functions that we might use to alter our app
    //(what action might cause the state to be updated)

    //change colour of the words
    changeColour: (state, action) => {
      //updating the state to what was added into the payload
      state.value = action.payload;
    },
  },
});

//you can access the payload in here too by calling .actions
//call login in the place where you want to alter the state (login component)
export const { changeColour } = themeSlice.actions;

// why need to call this again?
export default themeSlice.reducer;
