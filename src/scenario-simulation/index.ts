import { WebFramework } from '../domains/WebFramework'
import { UserService } from './services/UserService'
import { UserController } from './controllers/UserController'
import { DuplicateEmailError } from './errors/duplicate-email/DuplicateEmailError'
import { DuplicateEmailErrorResponse } from './errors/duplicate-email/DuplicateEmailErrorResponse'
import { RegistrationFormatIncorrectError } from './errors/registration-format-incorrect/RegistrationFormatIncorrectError'
import { RegistrationFormatIncorrectErrorResponse } from './errors/registration-format-incorrect/RegistrationFormatIncorrectErrorResponse'

const webFramework = new WebFramework({
  port: 3000,
})

// add plugin

// get router util
const routerUtil = webFramework.getRouterUtil()

// 使用 routerUtil 建立 API
const userController = new UserController({
  userService: new UserService(),
})

// 註冊 API
routerUtil.post({
  path: '/api/users',
  handler: userController.registerUser,
})

// 註冊失敗案例 1（郵件已存在）
webFramework.registerErrorHttpResponse(
  DuplicateEmailError.getInstance(),
  DuplicateEmailErrorResponse.getInstance(),
)
// 註冊失敗案例 2（資料格式不正確）
webFramework.registerErrorHttpResponse(
  RegistrationFormatIncorrectError.getInstance(),
  RegistrationFormatIncorrectErrorResponse.getInstance(),
)

// launch
webFramework.launch()
