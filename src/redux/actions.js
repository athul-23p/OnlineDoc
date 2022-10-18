export const EditProfileActions = {
  ADD_BASIC_DETAILS: 'ADD_BASIC_DETAILS',
  ADD_QUALIFICATION_DETAILS: 'ADD_QUALIFICATION_DETAILS',
  ADD_EXPERIENCE_DETAILS: 'ADD_EXPERIENCE_DETAILS',
};

export const addBasicDetails = payload => ({
  type: EditProfileActions.ADD_BASIC_DETAILS,
  payload,
});

// payload : array of qualification objects
export const addQualificationDetails = payload => ({
  type: EditProfileActions.ADD_QUALIFICATION_DETAILS,
  payload,
});

// payload : array of experience objects

export const addExperienceDetails = payload => ({
  type: EditProfileActions.ADD_EXPERIENCE_DETAILS,
  payload,
});
