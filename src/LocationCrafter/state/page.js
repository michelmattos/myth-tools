export const getInitialState = () => ({
  isElementFormOpen: false
})

export const toggleElementForm = state => ({
  ...state,
  isElementFormOpen: !state.isOpen
})
