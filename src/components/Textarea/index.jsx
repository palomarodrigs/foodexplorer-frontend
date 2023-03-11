import { Container, TextareaInput } from './styles'

export function Textarea({ title, value, ...rest }) {
  return (
    <Container>
      <TextareaInput {...rest}>{value}</TextareaInput>
    </Container>
  )
}
