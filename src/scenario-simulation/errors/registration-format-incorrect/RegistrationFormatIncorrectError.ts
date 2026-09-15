export class RegistrationFormatIncorrectError extends Error {
  private static instance: RegistrationFormatIncorrectError

  private constructor(message: string = "Registration's format incorrect.") {
    super(message)

    this.name = 'RegistrationFormatIncorrectError'
  }

  public static getInstance(): RegistrationFormatIncorrectError {
    if (!RegistrationFormatIncorrectError.instance) {
      RegistrationFormatIncorrectError.instance =
        new RegistrationFormatIncorrectError()
    }

    return RegistrationFormatIncorrectError.instance
  }
}
