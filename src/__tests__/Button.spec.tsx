import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@chakra-ui/react'

test('Button', () => {
  const onClick = jest.fn()
  render(<Button onClick={onClick}>share</Button>)

  fireEvent.click(screen.getByText('share'))

  expect(screen.getByText('share')).toBeVisible()
  expect(onClick).toHaveBeenCalled()
})
