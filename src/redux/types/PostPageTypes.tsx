export interface postsPageState {
  items: (string | number)[]
  isFetching: boolean
}

export enum postPageTypes {
  SET_POST_PAGE = 'SET_POST_PAGE',
}

interface postPageStart {
  type: postPageTypes.SET_POST_PAGE
  payload: any[]
}

export type postPageAction = postPageStart
