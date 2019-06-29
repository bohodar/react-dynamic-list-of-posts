export const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
};
export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
};
export const getComments = () => {
  return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(result => result.json())
};
