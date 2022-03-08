import { Dispatch } from 'react'
import { postPageAction, postPageTypes } from '../types/PostPageTypes'

export const setPostPageAction = () => {
  const slToken = localStorage.getItem('sl_token')
  const postsUrl = `https://api.supermetrics.com/assignment/posts?page=${10}&sl_token=${slToken}`

  return function (dispatch: Dispatch<postPageAction>) {
    try {
      fetch(postsUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((json) =>
          dispatch({ type: postPageTypes.SET_POST_PAGE, payload: json })
        )
    } catch (error) {
      console.warn(error)
    }
  }
}
