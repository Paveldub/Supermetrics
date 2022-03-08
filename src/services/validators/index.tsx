export const email = (value) => {
  if (value) {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      return undefined
    } else {
      return 'Is the data correct?'
    }
  } else {
    return undefined
  }
}

export const required = (value) =>
  value || value?.trim() || typeof value === 'number'
    ? undefined
    : 'This field is required'
