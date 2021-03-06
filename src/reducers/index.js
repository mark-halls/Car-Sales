export const reducer = (state, action) => {
  switch (action.type) {
    case "BUY_ITEM": {
      if (state.car.features.find(item => item.id === action.payload.id)) {
        return state;
      }

      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: { ...state.car, features: [...state.car.features, action.payload] }
      };
    }
    case "REMOVE_FEATURE":
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            feature => feature.id !== action.payload.id
          )
        }
      };

    default:
      return state;
  }
};
