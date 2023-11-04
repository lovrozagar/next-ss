import Page from '@/app/page'
import { render, screen } from '@testing-library/react'

describe('Dashboard', () => {
  it('should render properly', () => {
    render(<Page />)

    const headerText = screen.getByRole('heading', { level: 1 })?.textContent

    const expectedHeaderText = 'Hi, I am a page and I have a default export.'

    expect(headerText).toBe(expectedHeaderText)
  })
})
