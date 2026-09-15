type shouldBeEmailProps = {
  email: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function shouldBeEmail({ email }: shouldBeEmailProps) {
  if (!EMAIL_PATTERN.test(email)) {
    throw new Error('email must be a valid email format')
  }
}
