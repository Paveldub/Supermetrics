export const createTriggerValidationFunction = (errors, trigger) => (name) => {
  if (errors[name]) trigger(name)
}
