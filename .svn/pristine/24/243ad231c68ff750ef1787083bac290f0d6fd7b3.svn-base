

import Cookie from 'js-cookie'

const TOKEN = 'Login-Token'
const setToken = (token) => {
    Cookie.set(TOKEN, token)
}
const getToken = () => {
    return Cookie.get(TOKEN)
}
const removeToken = () => {
    Cookie.remove(TOKEN)
    Cookie.remove('JSESSIONID')
}
export {
    setToken,
    getToken,
    removeToken
}


