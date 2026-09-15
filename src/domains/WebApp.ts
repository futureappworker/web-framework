import type { HttpRouter } from './HttpRouter'
import type { Plugin } from './Plugin'

export class WebApp {
  static appInstance: WebApp | null = null
  private routers: HttpRouter[] = []
  private plugins: Plugin[] = []

  private constructor() {}

  static getInstance(): WebApp {
    if (!WebApp.appInstance) {
      WebApp.appInstance = new WebApp()
    }
    return WebApp.appInstance
  }

  getRouter() {
    return this.routers
  }

  addRouter(httpRouter: HttpRouter) {
    this.routers.push(httpRouter)
  }

  addPlugin(plugin: Plugin) {
    this.plugins.push(plugin)
  }
}
