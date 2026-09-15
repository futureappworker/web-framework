import type { HttpRequest } from '../domains/HttpRequest'

export type HttpHandlerResponse = {
  status: number
  headers?: Map<string, string>
  body: any
}

export type HttpHandler = (httpRequest: HttpRequest) => HttpHandlerResponse
