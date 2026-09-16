import type { StatusLine } from './StatusLine'

type HttpResponseProps<TBody> = {
  statusLine: StatusLine
  headers?: Map<string, string>
  body: TBody
}

export class HttpResponse<TBody> {
  private statusLine: StatusLine
  private headers: Map<string, string>
  private body: TBody

  constructor({
    statusLine,
    headers = new Map(),
    body,
  }: HttpResponseProps<TBody>) {
    this.statusLine = statusLine
    this.headers = headers
    this.body = body
  }

  getStatusLine(): StatusLine {
    return this.statusLine
  }

  getHeaders(): Map<string, string> {
    return this.headers
  }

  getBody(): TBody {
    return this.body
  }

  setBody(body: TBody): void {
    this.body = body
  }
}
