/*
 * action types
 */
export const LOGIN = 'LOGIN'

/*
 * action creators
 */
export const login = (authResult) => {
  return { type: LOGIN, authResult }
}


