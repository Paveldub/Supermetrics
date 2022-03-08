import { email, required } from '../../services/validators/index'

export const FIELDS = {
  name: {
    name: 'name',
    type: 'text',
    register: {
      validate: { required },
    },
  },
  email: {
    name: 'email',
    type: 'text',
    register: {
      validate: {
        required,
        email,
      },
    },
  },
}
