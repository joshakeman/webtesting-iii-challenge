// Test away!
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'
import { toHaveClass } from 'jest-dom'

import Display from './Display'

describe('<Display />',  () => {
    it('Displays closed if the closed prop is true', () => {
        const { getByText } = render(<Display closed />)

        getByText(/Closed/i)
    })
    it('Displays open if the closed prop is false', () => {
        const { getByText } = render(<Display closed={false}/>)

        getByText(/Open/i)
    })
    it('Displays locked if the locked prop is true', () => {
        const { getByText } = render(<Display locked />)

        getByText(/locked/i)
    })
    it('Displays unlocked if the locked prop is false', () => {
        const { getByText } = render(<Display closed={false}/>)

        getByText(/unlocked/i)
    })
    it('Should have red-led class when locked', () => {
        const { getByText } = render(<Display locked/>)
        const button = getByText(/locked/i)

        expect(button).toHaveClass('red-led')
    })
    it('Should have red-led class when closed', () => {
        const { getByText } = render(<Display closed/>)
        const button = getByText(/closed/i)

        expect(button).toHaveClass('red-led')
    })
    it('Should have green-led class when unlocked', () => {
        const { getByText } = render(<Display locked={false}/>)
        const button = getByText(/unlocked/i)

        expect(button).toHaveClass('green-led')
    })
    it('Should have green-led class when open', () => {
        const { getByText } = render(<Display closed={false}/>)
        const button = getByText(/open/i)

        expect(button).toHaveClass('green-led')
    })
})