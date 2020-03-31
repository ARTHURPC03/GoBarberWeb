import produce from 'immer'

const INITAL_STATE = {
  profile: null,
}

export default function user(state = INITAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.user
      })
    default:
      return state
  }
}
