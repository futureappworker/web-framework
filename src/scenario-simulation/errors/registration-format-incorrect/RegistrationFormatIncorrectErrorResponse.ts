import { HttpResponse } from '../../../domains/HttpResponse'
import { StatusLine } from '../../../domains/StatusLine'
import { RegistrationFormatIncorrectError } from './RegistrationFormatIncorrectError'

export class RegistrationFormatIncorrectErrorResponse extends HttpResponse {
  private static instance: RegistrationFormatIncorrectErrorResponse

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

      body: RegistrationFormatIncorrectError.getInstance().name,
    })
  }

  public static getInstance(): RegistrationFormatIncorrectErrorResponse {
    if (!RegistrationFormatIncorrectErrorResponse.instance) {
      RegistrationFormatIncorrectErrorResponse.instance =
        new RegistrationFormatIncorrectErrorResponse()
    }

    return RegistrationFormatIncorrectErrorResponse.instance
  }
}
