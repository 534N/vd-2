
const auth = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN': 
      console.debug(action.authResult)
      return Object.assign({}, state, {
        auth: action.authResult
      })

    default:
      return state
  }
}

export default auth