import * as UsersApiUtil from '../util/user_api_util';
import { RECEIVE_USER } from './types';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const createUser = (payload) => disptach => (
  UsersApiUtil.createUser(payload).then(user => disptach(receiveUser(user)))
);

export const fetchUser = (id) => disptach => (
  UsersApiUtil.fetchUser(id).then(user => disptach(receiveUser(user)))
);