export const createUser = (payload) => {
  return  $.ajax({
    method: 'POST',
    url: `api/users`,
    data: { payload }
  })
}

export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
}