import {render, scree, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Login from './login'

// Taken directly from revision session. Please alter to match our login page.

describe('Login', () => {

  // Page loads and shows Log In screen
  test('loads and displays log in heading', () => {
    // ARRANGE
    render(<Login />)

    // ACT
    const loginPageHeading = screen.getByRole('h1')

    // ASSERT
    expect(loginPageHeading).toHaveTextContent('Log In')
  })

  // On click 'Sign In', if fields are empty, show 'Please fill in all fields'
  test('checks if error message shows on empty field', async () => {
    // ARRANGE
    render(<Login />)
    const signInButton = screen.getByRole('button', { name: /^SIGN IN$/i });
    const usernameInput = screen.getByRole('input', { name: /^Username$/i });
    const pwdInput = screen.getByRole('input', { name: /^Password$/i });

    // ACT
    if (usernameInput === '' && pwdInput === '') {
      await userEvent.click(signInButton)
      await screen.findByRole('p')
    }

    // ASSERT
    expect(screen.getByRole('p')).toHaveTextContent('Please fill in all fields')
  })
})