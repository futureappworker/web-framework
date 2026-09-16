import { shouldBeEmail } from '../../utils/shouldBeEmail'
import { shouldBeWithinRange } from '../../utils/shouldBeWithinRange'

export type UserBody = {
  email: string
  name: string
  password: string
}

type UserProps = {
  id?: string
} & UserBody

export class User {
  private id: string | null
  private email!: string
  private name!: string
  private password!: string

  constructor({ id, email, name, password }: UserProps) {
    if (id) {
      this.id = id
    } else {
      this.id = null
    }

    this.setEmail(email)
    this.setName(name)
    this.setPassword(password)
  }

  getId() {
    return this.id
  }

  setId(id: string) {
    this.id = id
  }

  getEmail() {
    return this.email
  }

  setEmail(email: string) {
    // 必須為郵件格式，字數限制 4~32
    shouldBeEmail({ email })
    shouldBeWithinRange({
      name: 'email',
      num: email.length,
      inclusiveMin: 4,
      inclusiveMax: 32,
    })
    this.email = email
  }

  getName() {
    return this.name
  }

  setName(name: string) {
    // 字數限制 5~32
    shouldBeWithinRange({
      name: 'name',
      num: name.length,
      inclusiveMin: 5,
      inclusiveMax: 32,
    })
    this.name = name
  }

  getPassword() {
    return this.password
  }

  setPassword(password: string) {
    // 字數限制 5~32
    shouldBeWithinRange({
      name: 'password',
      num: password.length,
      inclusiveMin: 5,
      inclusiveMax: 32,
    })
    this.password = password
  }
}
