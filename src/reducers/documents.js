import { SET_ALL_DOCUMENTS } from "../actions/types";

const initialState = {
  documents: [],
};

export const documentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_DOCUMENTS:
      return { ...state, documents: action.payload };

    default:
      return state;
  }
};
