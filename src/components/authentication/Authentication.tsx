import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const registerSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(3),
  name: yup.string().required().min(3),
  age: yup.number().required(),
})

export const RegisterForm = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={registerSchema}
    onSubmit={(values) => {
      alert(JSON.stringify(values, null, 2))
    }}
  >
    <Form>
      <label className="label" htmlFor="Email">
        Email
      </label>
      <Field className="field" id="email" name="email" />
      <ErrorMessage component="div" className="errorMsg" name="email" />

      <label className="label" htmlFor="Name">
        Name
      </label>
      <Field className="field" id="name" name="name" />
      <ErrorMessage component="div" className="errorMsg" name="name" />

      <label className="label" htmlFor="Age">
        Age
      </label>
      <Field className="field" id="age" name="age" />
      <ErrorMessage component="div" className="errorMsg" name="age" />

      <label className="label" htmlFor="Password">
        Password
      </label>
      <Field className="field" id="password" name="password" />
      <ErrorMessage component="div" className="errorMsg" name="password" />
      <button type="submit" className="button">
        Login
      </button>
    </Form>
  </Formik>
)

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(3),
})

export const LoginForm = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={loginSchema}
    onSubmit={async (values) => {
      alert(JSON.stringify(values, null, 2))
    }}
  >
    <Form>
      <label className="label" htmlFor="Email">
        Email
      </label>
      <Field className="field" id="email" name="email" />
      <ErrorMessage component="div" className="errorMsg" name="email" />
      <label className="label" htmlFor="Password">
        Password
      </label>
      <Field className="field" id="password" name="password" />
      <ErrorMessage component="div" className="errorMsg" name="password" />
      <button type="submit" className="button">
        Login
      </button>
    </Form>
  </Formik>
)
