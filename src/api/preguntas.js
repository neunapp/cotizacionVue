import axios from 'axios'

const apiPreguntas = {
  listarPreguntas: function () {
    return axios.get('https://prueba-4f132-default-rtdb.firebaseio.com/preguntas.json')
  }
}

export default apiPreguntas