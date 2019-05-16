// Test away!
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'

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
})