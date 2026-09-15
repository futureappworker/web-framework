import type { StatusLine } from './StatusLine'

type HttpResponseProps = {
  statusLine: StatusLine
  headers?: Map<string, string>
  body: string
}

export class HttpResponse {
  private statusLine: StatusLine
  private headers: Map<string, string>
  private body!: any

  constructor({ statusLine, headers = new Map(), body }: HttpResponseProps) {
    this.statusLine = statusLine
    this.headers = headers
    this.setBody(body)
  }

  getStatusLine(): StatusLine {
    return this.statusLine
  }

  getHeaders(): Map<string, string> {
    return this.headers
  }

  getBody(): string {
    return this.body
  }

  setBody(body: string) {
    // 預設使用 application/json 格式來序列化 HTTP Response Body
    const resultBody = JSON.stringify(body)
    // TODO: 要新增其它的序列化格式支援
    this.body = resultBody
  }
}
