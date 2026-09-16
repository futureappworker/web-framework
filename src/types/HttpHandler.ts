import type { HttpRequest } from '../domains/HttpRequest'

export type HttpHandlerResponse<TBody = unknown> = {
  status: number
  headers?: Map<string, string>
  body: TBody
}

export type HttpHandler<TBody = unknown> = (
  httpRequest: HttpRequest,
) => HttpHandlerResponse<TBody>
