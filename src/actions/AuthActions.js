/*
 * action types
 */
export const LOGIN = 'LOGIN'

/*
 * action creators
 */
const login = (authResult) => {
  return { type: LOGIN, authResult }
}


export default login