import { render, screen } from '@testing-library/react'
import Card from './Card'

test('renders title prop correctly', () => {
  render(<Card title="Hello World">Content</Card>)
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument()
})