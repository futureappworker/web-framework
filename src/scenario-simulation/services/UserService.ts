import { User, type UserBody } from '../resources/User'

export class UserService {
  private users: User[] = []

  existsByEmail(email: string) {
    return this.users.some((u) => u.getEmail() === email)
  }

  createUser(body: UserBody): User {
    // 生成唯一的 id
    // 會員編號 (Id)：該會員的流水號，從 1 開始算起，如果此系統中目前存在 3 位會員，則在此時註冊會員的話會獲得會員編號 4
    const nextId = this.users.length + 1

    const user = new User({
      id: nextId.toString(),
      email: body.email,
      name: body.name,
      password: body.password,
    })

    // 新增會員
    this.users.push(user)

    return user
  }
}
