import type { HttpResponse } from './HttpResponse'
import { HttpServer } from './HttpServer'
import type { Plugin } from './Plugin'
import type { RouterUtil } from './RouterUtil'
import { WebApp } from './WebApp'

type WebFrameworkProps = {
  port: number
}

export class WebFramework {
  private httpServer: HttpServer

  constructor({ port }: WebFrameworkProps) {
    const webApp = WebApp.getInstance()

    this.httpServer = HttpServer.getInstance({
      port,
      webApp: webApp,
    })
  }

  getPort() {
    return this.httpServer.getPort()
  }

  getHttpServer(): HttpServer {
    return this.httpServer
  }

  addPlugin(plugin: Plugin) {
    this.httpServer.addPlugin(plugin)
  }

  registerErrorHttpResponse(
    errorType: Error,
    errorHttpResponse: HttpResponse<string>,
  ): void {
    this.httpServer.registerErrorHttpResponse(errorType, errorHttpResponse)
  }

  getRouterUtil(): RouterUtil {
    return this.httpServer.getRouterUtil()
  }

  launch(): void {
    this.httpServer.start()
  }
}
