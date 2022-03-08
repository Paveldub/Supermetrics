import {
  postPageAction,
  postPageTypes,
  postsPageState,
} from '../types/PostPageTypes'

const initialState: postsPageState = {
  items: [],
  isFetching: true,
}

export const postPage = (state = initialState, action: postPageAction) => {
  switch (action.type) {
    case postPageTypes.SET_POST_PAGE:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      }
    default:
      return state
  }
}
