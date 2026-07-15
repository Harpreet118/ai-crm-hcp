import { configureStore } from "@reduxjs/toolkit";
import interactionReducer from "./interactionSlice";
import searchReducer from "./searchSlice";


export const store = configureStore({

  reducer:{

    interaction: interactionReducer,

    search: searchReducer

  }

});