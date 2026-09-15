import type { HttpHandler } from '../types/HttpHandler'
import type { HttpMethodType } from '../types/HttpMethodType'

type HttpRouterProps = {
  path: string
  method: HttpMethodType
  handler: HttpHandler
}

export class HttpRouter {
  private path!: string
  private method!: HttpMethodType
  private handler!: HttpHandler

  constructor({ path, method, handler }: HttpRouterProps) {
    this.setPath(path)
    this.setMethod(method)
    this.setHandler(handler)
  }

  getPath() {
    return this.path
  }

  private setPath(path: string) {
    this.path = path
  }

  getMethod() {
    return this.method
  }

  private setMethod(method: HttpMethodType) {
    this.method = method
  }

  getHandler() {
    return this.handler
  }

  private setHandler(handler: HttpHandler) {
    this.handler = handler
  }
}
