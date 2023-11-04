import { Component } from '@/app/component'
import { render, screen } from '@testing-library/react'

describe('Dashboard', () => {
  it('should render properly', () => {
    const mockedProperty = 'Hi, I am a component and I have a named export.'

    render(<Component prop={mockedProperty} />)

    const headerText = screen.getByRole('heading', { level: 2 })?.textContent

    const expectedHeaderText = mockedProperty

    expect(headerText).toBe(expectedHeaderText)
  })
})
