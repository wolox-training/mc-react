export function setLoginInfo(data) {
  localStorage.setItem('renew_id', data.renew_id)
  localStorage.setItem('access_token', data.access_token)
}

export function logout(){
  localStorage.removeItem('renew_id')
  localStorage.removeItem('access_token')
}

export function isLoggedIn() {
  return localStorage.getItem('access_token')
}
