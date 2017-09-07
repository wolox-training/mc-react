import { api } from './api';

export function login(user) {
  return api.post('/users/sessions', user);
};
