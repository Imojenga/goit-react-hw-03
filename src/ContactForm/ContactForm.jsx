import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be in format XXX-XX-XX')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.infoWrp}>
          <label htmlFor="username">Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id="username"
          ></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.infoWrp}>
          <label htmlFor="phone">Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id="phone"
          ></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.submit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
