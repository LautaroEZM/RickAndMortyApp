
import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
  }
};

export default rootReducer;