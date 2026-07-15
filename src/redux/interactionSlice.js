import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hcpName: "",
  hospital: "",
  interactionDate: "",
  product: "",
  sentiment: "",
  brochureShared: "",
  notes: "",
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState,

  reducers: {
    setInteraction(state, action) {
      state.hcpName = action.payload.hcpName || "";
      state.hospital = action.payload.hospital || "";
      state.interactionDate = action.payload.interactionDate || "";
      state.product = action.payload.product || "";
      state.sentiment = action.payload.sentiment || "";
      state.brochureShared = action.payload.brochureShared || "";
      state.notes = action.payload.notes || "";
    },

    clearInteraction(state) {
      state.hcpName = "";
      state.hospital = "";
      state.interactionDate = "";
      state.product = "";
      state.sentiment = "";
      state.brochureShared = "";
      state.notes = "";
    },
  },
});

export const {
  setInteraction,
  clearInteraction,
} = interactionSlice.actions;

export default interactionSlice.reducer;