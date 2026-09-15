import type { HttpHandler } from '../types/HttpHandler'
import { HttpMethodType } from '../types/HttpMethodType'
import { HttpRouter } from './HttpRouter'
import type { WebApp } from './WebApp'

type RouterUtilProps = {
  webApp: WebApp
}

type CommonParams = {
  path: string
  handler: HttpHandler
}

export class RouterUtil {
  private webApp!: WebApp

  constructor({ webApp }: RouterUtilProps) {
    this.webApp = webApp
  }

  get({ path, handler }: CommonParams) {
    this.webApp.addRouter(
      new HttpRouter({ path, method: HttpMethodType.GET, handler }),
    )
  }

  post({ path, handler }: CommonParams) {
    this.webApp.addRouter(
      new HttpRouter({ path, method: HttpMethodType.POST, handler }),
    )
  }

  put({ path, handler }: CommonParams) {
    this.webApp.addRouter(
      new HttpRouter({ path, method: HttpMethodType.PUT, handler }),
    )
  }

  delete({ path, handler }: CommonParams) {
    this.webApp.addRouter(
      new HttpRouter({ path, method: HttpMethodType.DELETE, handler }),
    )
  }

  patch({ path, handler }: CommonParams) {
    this.webApp.addRouter(
      new HttpRouter({ path, method: HttpMethodType.PATCH, handler }),
    )
  }

  head({ path, handler }: CommonParams) {
    this.webApp.addRouter(
      new HttpRouter({ path, method: HttpMethodType.HEAD, handler }),
    )
  }

  options({ path, handler }: CommonParams) {
    this.webApp.addRouter(
      new HttpRouter({ path, method: HttpMethodType.OPTIONS, handler }),
    )
  }

  trace({ path, handler }: CommonParams) {
    this.webApp.addRouter(
      new HttpRouter({ path, method: HttpMethodType.TRACE, handler }),
    )
  }

  connect({ path, handler }: CommonParams) {
    this.webApp.addRouter(
      new HttpRouter({ path, method: HttpMethodType.CONNECT, handler }),
    )
  }
}
