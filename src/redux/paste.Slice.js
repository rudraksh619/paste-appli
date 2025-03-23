import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addtoPastes: (state, action) => {
      
      const paste = action.payload;
      state.pastes.push(paste);

      localStorage.setItem("pastes", JSON.stringify(state.pastes));

      // created a toatst which render when you paste sccuessfully stoed in ypuur l
      // storage
     
      toast("page created succefully");

     
    },
    updatetopastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }
      toast.success("updated succesfully");
      
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
    removefrompastes: (state, action) => {
      const pasteId = action.payload;
      console.log(pasteId);
      const index = state.pastes.findIndex((item) => item._id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }
      toast.success("deletion get succefully");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoPastes, updatetopastes, resetAllPastes, removefrompastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
