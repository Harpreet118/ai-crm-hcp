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
  reducers: {},
});

export default interactionSlice.reducer;