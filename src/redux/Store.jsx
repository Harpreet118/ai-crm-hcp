import { configureStore } from "@reduxjs/toolkit";

import interactionReducer from "./interactionSlice";
import searchReducer from "./searchSlice";


const store = configureStore({

  reducer: {

    interaction: interactionReducer,

    search: searchReducer

  }

});


export default store;