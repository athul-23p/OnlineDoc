export const EditProfileActions = {
  ADD_BASIC_DETAILS: 'ADD_BASIC_DETAILS',
};

export const addBasicDetails = payload => ({
  type: EditProfileActions.ADD_BASIC_DETAILS,
  payload,
});
