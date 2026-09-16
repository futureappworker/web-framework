import type { HttpRequest } from '../../domains/HttpRequest'
import type { UserService } from '../../scenario-simulation/services/UserService'
import { DuplicateEmailError } from '../errors/duplicate-email/DuplicateEmailError'
import { RegistrationFormatIncorrectError } from '../errors/registration-format-incorrect/RegistrationFormatIncorrectError'

type UserControllerProps = {
  userService: UserService
}

export class UserController {
  private userService!: UserService

  constructor({ userService }: UserControllerProps) {
    this.setUserService(userService)
  }

  getUserService() {
    return this.userService
  }

  setUserService(userService: UserService) {
    this.userService = userService
  }

  registerUser(httpRequest: HttpRequest) {
    const body = httpRequest.readBodyAsObject()
    const email: string = body.email
    const name: string = body.name
    const password: string = body.password

    // email or name or password，都不可為空
    if (email === '' || name === '' || password === '') {
      throw RegistrationFormatIncorrectError.getInstance()
    }

    if (this.userService.existsByEmail(email)) {
      throw DuplicateEmailError.getInstance()
    }

    // 新增好的會員資料，回傳給前端
    const createdUser = this.userService.createUser(body)

    return {
      status: 200,
      body: createdUser,
    }
  }
}
