import { shouldBeWithinRange } from '../utils/shouldBeWithinRange'
import type { HttpResponse } from './HttpResponse'
import type { Plugin } from './Plugin'
import { RouterUtil } from './RouterUtil'
import type { WebApp } from './WebApp'

type HttpServerProps = {
  port: number
  webApp: WebApp
}

export class HttpServer {
  private static serverInstance: HttpServer | null = null
  private port!: number
  private webApp!: WebApp
  private routerUtil: RouterUtil
  private errorHttpResponseMap: Map<Error, HttpResponse> = new Map()
  private plugins: Plugin[] = []

  private constructor({ port, webApp }: HttpServerProps) {
    this.setPort(port)
    this.setWebApp(webApp)

    this.routerUtil = new RouterUtil({
      webApp,
    })
  }

  static getInstance(props: HttpServerProps): HttpServer {
    if (!HttpServer.serverInstance) {
      HttpServer.serverInstance = new HttpServer(props)
    }

    return HttpServer.serverInstance
  }

  getPort(): number {
    return this.port
  }

  private setPort(port: number) {
    // 5000~65535
    shouldBeWithinRange({
      name: 'port',
      num: port,
      inclusiveMin: 5000,
      inclusiveMax: 65535,
    })
    this.port = port
  }

  getWebApp() {
    return this.webApp
  }

  private setWebApp(webApp: WebApp) {
    this.webApp = webApp
  }

  addPlugin(plugin: Plugin) {
    this.plugins.push(plugin)
    this.webApp.addPlugin(plugin)
  }

  registerErrorHttpResponse(
    errorType: Error,
    errorHttpResponse: HttpResponse,
  ): void {
    this.errorHttpResponseMap.set(errorType, errorHttpResponse)
  }

  getRouterUtil(): RouterUtil {
    return this.routerUtil
  }

  // start() {
  //   // TODO
  // }

  // request(httpRequest: HttpRequest): HttpResponse {
  //   // TODO
  // }
}
