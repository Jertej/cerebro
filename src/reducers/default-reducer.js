import { FETCH_DATA, ADD_PHOTO } from '../actions';
import images from "../data";

const initialState = images;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.data;
    case ADD_PHOTO:
      return [
        ...state,
        {
          src: action.src,
          thumbnail: action.src,
          thumbnailWidth: 320,
          thumbnailHeight: 320,
          caption: action.name
        }
      ];
    default:
      return state;
  }
};
