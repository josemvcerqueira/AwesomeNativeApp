import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "../actions/places.types";
import placeImage from "../../assets/cloud.png";

const INITIAL_STATE = {
  places: [],
  selectedPlace: null
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PLACE: {
      const updatedPlaces = state.places.concat({
        key: `${Math.random()}`,
        name: action.payload,
        image: placeImage
      });
      return {
        ...state,
        places: updatedPlaces
      };
    }
    case DELETE_PLACE: {
      const updatedPlaces = state.places.filter(
        place => place.key !== state.selectedPlace.key
      );
      return {
        ...state,
        places: updatedPlaces,
        selectedPlace: null
      };
    }
    case SELECT_PLACE: {
      const newSelectedPlace = state.places.find(
        _place => _place.key === action.payload
      );
      return {
        ...state,
        selectedPlace: newSelectedPlace
      };
    }
    case DESELECT_PLACE: {
      return {
        ...state,
        selectedPlace: null
      };
    }
    default:
      return state;
  }
}

export default reducer;
