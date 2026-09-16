import { HttpResponse } from '../../../domains/HttpResponse'
import { StatusLine } from '../../../domains/StatusLine'
import { DuplicateEmailError } from './DuplicateEmailError'

export class DuplicateEmailErrorResponse extends HttpResponse<string> {
  private static instance: DuplicateEmailErrorResponse

  private constructor() {
    super({
      statusLine: new StatusLine({
        httpVersion: '1.1',
        statusCode: 400,
      }),

      headers: new Map([
        ['content-type', 'text/plain'],
        ['content-encoding', 'UTF-8'],
      ]),

      body: DuplicateEmailError.getInstance().name,
    })
  }

  public static getInstance(): DuplicateEmailErrorResponse {
    if (!DuplicateEmailErrorResponse.instance) {
      DuplicateEmailErrorResponse.instance = new DuplicateEmailErrorResponse()
    }

    return DuplicateEmailErrorResponse.instance
  }
}
