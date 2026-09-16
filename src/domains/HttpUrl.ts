type HttpUrlProps = {
  scheme: string
  host: string
  port: number
  path: string
  queryString: string
}

export class HttpUrl {
  private scheme: string
  private host: string
  private port: number
  private path: string
  private queryString: string

  constructor({ scheme, host, port, path, queryString }: HttpUrlProps) {
    this.scheme = scheme
    this.host = host
    this.port = port
    this.path = path
    this.queryString = queryString
  }

  getScheme(): string {
    return this.scheme
  }

  getHost(): string {
    return this.host
  }

  getPort(): number {
    return this.port
  }

  getPath(): string {
    return this.path
  }

  getQueryString(): string {
    return this.queryString
  }

  toString(): string {
    return `${this.scheme}://${this.host}:${this.port}${this.path}${this.queryString}`
  }
}
