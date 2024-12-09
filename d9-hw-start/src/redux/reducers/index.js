const initialState = {
  favourite: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };
  }
};

export default mainReducer;
