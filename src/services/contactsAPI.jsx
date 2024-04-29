import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact({ name, number }) {
  const { data } = await axios.post('/contacts', {
    name,
    number,
  });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

export async function signUp(user) {
  const { data } = await axios.post('/users/signup', user);
  token.set(data.token);
  return data;
}

export async function logIn(user) {
  const { data } = await axios.post('/users/login', user);
  token.set(data.token);
  return data;
}

export async function logOut() {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
}

export async function refresh(persistedToken) {
  token.set(persistedToken);
  const { data } = await axios.get('/users/current');
  return data;
}
