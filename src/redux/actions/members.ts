import {
  FAIL_MEMBERS,
  MEMBERS,
  LOAD_MEMBERS,
  ADD_MEMBER,
  DELETE_MEMBER,
} from '../constants/members';

import members from '../../data/data.json';

export const getMembers = () => (dispatch: any) => {
  dispatch({ type: MEMBERS, payload: members });
};

export const addMember = (member: string) => (dispatch: any) => {
  dispatch({ type: LOAD_MEMBERS });
  try {
    dispatch({ type: ADD_MEMBER, payload: member });
  } catch (error: any) {
    dispatch({ type: FAIL_MEMBERS, payload: 'Error Occured!' });
  }
};

export const delteMember = (member: string) => (dispatch: any) => {
  dispatch({ type: LOAD_MEMBERS });
  try {
    dispatch({ type: DELETE_MEMBER, payload: member });
  } catch (error: any) {
    dispatch({ type: FAIL_MEMBERS, payload: 'Error Occured!' });
  }
};
