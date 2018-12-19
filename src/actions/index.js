export const FETCH_DATA = "fetch_data";
export const ADD_PHOTO = "add_photo";

export const fetchData = () => {
  return {
    type: FETCH_DATA,
  };
};

export const addPhoto = photo => {
  return {
    type: ADD_PHOTO,
    src: photo.src,
    name: photo.name
  };
};
