export const fetchUsers = () => {
  console.log('make request');
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};
