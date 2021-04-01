import axios from 'axios'

const apiUsers = {
  retriveUser: function () {
    return axios.get('https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + localStorage.getItem('token_user'))
  }
}

export default apiUsers