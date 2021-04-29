import axios from 'axios';
import * as apiServices from 'services';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

//users
export const getUsers = () => {
  return api.get(apiServices.userPath).then(res => res.data)
}

//posts
export const getPosts = () => {
  return api.get(apiServices.postsPath).then(res => res.data)
}

export const getPost = (id: number) => {
  return api.get(`${apiServices.postsPath}/${id}`).then(res => res.data);
}

export const deletePost = (id: number) => {
  return api.delete(`${apiServices.postsPath}/${id}`);
}

//comments
export const getComments = () => {
  return api.get(apiServices.commentsPath).then(res => res.data)
}
