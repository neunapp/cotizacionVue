import * as types from './mutation-types'

import apiUsers from '../../api/users.js'

export const toLogin = ({commit}, usuario) => {
  commit(types.LOGIN_SUCCESS, usuario)
}

export const retriveUser = ({commit}) => {
  apiUsers.retriveUser().then(
    (response) => {
      console.log('recuperando informacion de usuario')
      console.log(response.data)
      commit(types.SET_USER, response.data)
    }
  )
}