import type { HttpMethodType } from '../types/HttpMethodType'
import type { HttpUrl } from './HttpUrl'

type RequestLineProps = {
  httpMethod: HttpMethodType
  httpUrl: HttpUrl
  httlpVersion: string
}

export class RequestLine {
  private httpMethod: HttpMethodType
  private httpUrl: HttpUrl
  private httlpVersion: string

  constructor({ httpMethod, httpUrl, httlpVersion }: RequestLineProps) {
    this.httpMethod = httpMethod
    this.httpUrl = httpUrl
    this.httlpVersion = httlpVersion
  }

  getHttpMethod(): HttpMethodType {
    return this.httpMethod
  }

  getHttpUrl(): HttpUrl {
    return this.httpUrl
  }

  getHttpVersion(): string {
    return this.httlpVersion
  }
}
