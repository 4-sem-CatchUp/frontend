import { render, screen } from '@testing-library/react'
import ProfilePage from '@/features/profile/pages/ProfilePage'

//Checks to see if all the different components correctly gets rendered on the profile page.

test('renders all profile sections', () => {
  render(<ProfilePage />)
  expect(screen.getByText(/recent activity/i)).toBeInTheDocument()
  expect(screen.getByText(/List of earned achievements/i)).toBeInTheDocument()
  expect(screen.getByText(/Comment section where/i)).toBeInTheDocument()
  // fx Sidebar: kig efter landmark eller noget unikt
  expect(screen.getByRole('complementary')).toBeInTheDocument() // hvis Sidebar bruger <aside>
})