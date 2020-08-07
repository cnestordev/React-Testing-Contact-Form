import React from "react"
import { render, screen, fireEvent, act } from "@testing-library/react"
import ContactForm from "./ContactForm"

// All inputs are visible
test('all inputs are mounted on the DOM', async () => {
    act(() => {
        render(<ContactForm />)
    })


    //check if all inputs are mounted to DOM
    const fnInput = screen.getByLabelText(/first name/i)
    const lnInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const msgInput = screen.getByLabelText(/message/i)

    //check that all inputs work
    fireEvent.change(fnInput, { target: { value: 'Nr' } })
    expect(fnInput).toHaveValue('Nr')

    fireEvent.change(lnInput, { target: { value: 'Cerv' } })
    expect(lnInput).toHaveValue('Cerv')

    fireEvent.change(emailInput, { target: { value: 'email@em.com' } })
    expect(emailInput).toHaveValue('email@em.com')

    fireEvent.change(msgInput, { target: { value: 'mesg here' } })
    expect(msgInput).toHaveValue('mesg here')

    //check if submit button is displayed on DOM
    const submitBtn = screen.getByRole('button', { name: 'submit' })
    //click submit button
    fireEvent.click(submitBtn)

    //check if results are on DOM
    const result = await screen.findByTestId('formData')
    expect(result).toBeInTheDocument()
})

