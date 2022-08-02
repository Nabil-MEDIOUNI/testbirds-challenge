// import types
const {
  MEMBERS,
  ADD_MEMBER,
  DELETE_MEMBER,
  LOAD_MEMBERS,
  FAIL_MEMBERS,
} = require('../constants/members');

const storage: any = localStorage.getItem('selectedData');
const getallSelectedMembers: any = JSON.parse(storage);

// initialstate
const initialState = {
  data: [],
  selectedData: getallSelectedMembers || [],
  loading: false,
  error: '',
};

const membersReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOAD_MEMBERS:
      return { ...state, loading: true };
    case MEMBERS:
      return { ...state, data: payload, loading: false };
    case ADD_MEMBER:
      const getMember = state.data.find(
        (client: any) => client.username === payload,
      );

      const newMembers: any = getallSelectedMembers
        ? [...getallSelectedMembers, getMember]
        : [getMember];

      localStorage.setItem('selectedData', JSON.stringify(newMembers));

      return {
        ...state,
        selectedData: [...state.selectedData, getMember],
        loading: false,
      };
    case DELETE_MEMBER:
      const newArray = state.selectedData.filter(
        ({ username }: any) => username !== payload,
      );

      localStorage.setItem('selectedData', JSON.stringify(newArray));

      return {
        ...state,
        selectedData: newArray,
        loading: false,
      };
    case FAIL_MEMBERS:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default membersReducer;
