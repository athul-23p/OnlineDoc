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
    default:
      return state;
  }
};

export default reducer;
