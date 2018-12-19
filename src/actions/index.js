import images from "../data";

export const FETCH_DATA = "fetch_data";
export const ADD_PHOTO = "add_photo";

export const fetchData = () => {
  return {
    type: FETCH_DATA,
    data: images
  };
};

export const addPhoto = photo => {
  return {
    type: ADD_PHOTO,
    src: photo.src,
    name: photo.name
  };
};
