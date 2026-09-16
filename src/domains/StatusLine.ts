type StatusLineProps = {
  httpVersion: string
  statusCode: number
}

export class StatusLine {
  private httpVersion: string
  private statusCode: number

  constructor({ httpVersion, statusCode }: StatusLineProps) {
    this.httpVersion = httpVersion
    this.statusCode = statusCode
  }

  getHttpVersion() {
    return this.httpVersion
  }

  getStatusCode() {
    return this.statusCode
  }
}
