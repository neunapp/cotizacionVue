import * as types from './mutation-types'

export const listarPreguntas = ({commit}, lista) => {
  commit(types.SET_PREGUNTAS, lista)
}

export const seleccionarPregunta = ({commit}, pregunta) => {
  commit(types.SET_PREGUNTA, pregunta)
}