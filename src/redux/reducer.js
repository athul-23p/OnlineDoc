import {EditProfileActions} from './actions';

const initState = {
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
  qualifications: [],
  experiences: [],
};
const reducer = (state = initState, {type, payload}) => {
  switch (type) {
    case EditProfileActions.ADD_BASIC_DETAILS:
      return {...state, ...payload};
    case EditProfileActions.ADD_QUALIFICATION_DETAILS:
      return {...state, qualifications: payload};
    case EditProfileActions.ADD_EXPERIENCE_DETAILS:
      return {...state, experiences: payload};
    default:
      return state;
  }
};

export default reducer;
