import capitalize from 'lodash/capitalize'

export const constants = Object.freeze({
  // Element's Types
  CUSTOM: 'CUSTOM',
  NONE: 'NONE',
  EXPECTED: 'EXPECTED',
  SPECIAL: 'SPECIAL',
  RANDOM: 'RANDOM',
  COMPLETE: 'COMPLETE'
})

export const getInitialState = () => ({
  type: null,
  name: '',
  unique: false
})

export const actions = {
  update: (state, fields) => ({
    type: fields.type || state.type,
    name: fields.name || state.name,
    unique: fields.unique || state.unique
  })
}

export const selectors = {
  getElement: (state) => {
    if (state.type === constants.CUSTOM) {
      if (state.name !== '') {
        return {
          type: state.type,
          name: state.name,
          unique: state.unique
        }
      }
      return null
    } else if (state.type !== null) {
      return {
        type: state.type,
        name: capitalize(state.type),
        unique: false
      }
    }
    return null
  }
}
