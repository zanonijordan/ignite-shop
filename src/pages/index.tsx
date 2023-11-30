import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  border: '0',
  padding: '4px 8px'

})

export default function Home() {
  return ( <Button>hello world</Button>
  )
}
