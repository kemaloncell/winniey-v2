export default async(request) => {
  const token = localStorage.getItem('id_token')
  if (token)
    request.headers.Authorization = token

  return request
}
