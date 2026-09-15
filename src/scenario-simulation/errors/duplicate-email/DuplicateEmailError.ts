export class DuplicateEmailError extends Error {
  private static instance: DuplicateEmailError

  private constructor(message: string = 'Duplicate email') {
    super(message)

    this.name = 'DuplicateEmailError'
  }

  public static getInstance(): DuplicateEmailError {
    if (!DuplicateEmailError.instance) {
      DuplicateEmailError.instance = new DuplicateEmailError()
    }

    return DuplicateEmailError.instance
  }
}
