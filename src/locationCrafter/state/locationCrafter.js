export const getInitialState = () => ({
  isElementFormOpen: false,
  locations: []
})

export const actions = {
  toggleElementForm: (state) => ({
    ...state,
    isElementFormOpen: !state.isElementFormOpen
  }),

  addLocation: (state, location) => ({
    ...state,
    isElementFormOpen: false,
    locations: [
      ...state.locations,
      {...location, id: state.locations.length}
    ]
  })
}
