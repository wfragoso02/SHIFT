export const createUser = (payload) => {
  return  $.ajax({
      method: 'POST',
      url: `api/users`,
      data: { payload }
  })
}