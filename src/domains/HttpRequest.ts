import type { HttpMethodType } from '../types/HttpMethodType'
import type { RequestLine } from './RequestLine'

type HttpRequestProps = {
  requestLine: RequestLine
  headers: Map<string, string>
  body: string
}

export class HttpRequest {
  private requestLine: RequestLine
  private headers: Map<string, string>
  private body: string

  constructor({ requestLine, headers, body }: HttpRequestProps) {
    this.requestLine = requestLine
    this.headers = headers
    this.body = body
  }

  getUrl(): string {
    return (
      this.requestLine.getHttpUrl().getScheme() +
      '://' +
      this.requestLine.getHttpUrl().getHost() +
      ':' +
      this.requestLine.getHttpUrl().getPort() +
      this.requestLine.getHttpUrl().getPath() +
      this.requestLine.getHttpUrl().getQueryString()
    )
  }

  getHttpMethod(): HttpMethodType {
    return this.requestLine.getHttpMethod()
  }

  getHttlpVersion(): string {
    return this.requestLine.getHttpVersion()
  }

  getHeaderByKey(key: string): string {
    return this.headers.get(key) || ''
  }

  readBodyAsObject(type: string): string {
    // 讀取 HTTP Request body，並解序列化轉成某型別
    // type 用來指定欲解序列化的目標型別
    // 序列化的意思 =>
    // 是將一物件，轉成能透過網路傳遞的「字串」或是「二進制陣列」
    // 解序列化的意思 =>
    // 是將一「字串」或是「二進制陣列」，轉回某一指定型別的物件
    // 優先支援 content-type 欄位的格式
    // - application/json => 透過第三方 Json 套件來去解析 HTTP Request Body 中 JSON 格式的字串
    // - application/xml  => 透過第三方 XML 套件來去解析 HTTP Request Body 中 XML 格式的字串
    // 遇到尚未支援的 content-type 格式，則此時會拋出例外，中斷請求
    // 此時應該拋出 500 HTTP Status Code 表示例外
    // TODO
  }

  // 預設使用 application/json 格式來解序列化 HTTP Request Body
  getBody(): any {
    return this.readBodyAsObject('application/json')
  }

  getPathVariableByName(name: string): string {
    // TODO
  }

  getQueryVariableByName(name: string): string {
    // 獲得此次請求的查詢變數 (Query Variable)
    // 例如：http://localhost:3000/users?name=John&age=30
    // 則 name 的值為 John，age 的值為 30
    const queryString = this.requestLine.getHttpUrl().getQueryString()
    const params = new URLSearchParams(
      queryString.startsWith('?') ? queryString.slice(1) : queryString,
    )
    return params.get(name) || ''
  }
}
