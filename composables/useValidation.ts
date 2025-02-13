import { object, string } from 'yup'

export function useValidation(fields: string[], _num: number = 6) {
  interface Schema {
    [key: string]: any
  }

  const schema: Schema = {}

  const validation: Schema = {
    email: string().email('Неверный формат email (пример: zakaz@promms.ru)').required('*Заполните поле перед отправкой заявки.'),
    name: string().min(7, 'Имя и фамилия должны содержать минимум 7 символа').required('*Заполните поле перед отправкой заявки.'),
    phone: string()
      .matches(/^\+?\d{10,15}$/, 'Неверный формат номера телефона (пример: +79776404030)')
      .required('*Заполните поле перед отправкой заявки.'),
  }

  fields.forEach((field) => {
    schema[field] = validation[field]
  })

  const validationSchema = object(schema)

  return validationSchema
}
