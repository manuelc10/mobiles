import '@testing-library/jest-dom/extend-expect'
import React, { FormEvent } from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Button } from './index'

describe('Button', () => {
  let wrapper: RenderResult
  let onClickSpy: (event: FormEvent<HTMLButtonElement>) => void
  let blurSpy: jest.SpyInstance
  let button: HTMLElement

  beforeEach(() => {
    onClickSpy = jest.fn()
    blurSpy = jest.fn()
  })

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(<Button onClick={onClickSpy}>Click me</Button>)
      button = wrapper.getByText('Click me').parentElement
    })

    it('should default the type to "button"', () => {
      expect(button).toHaveAttribute('type', 'button')
    })

    describe('when the button is clicked', () => {
      beforeEach(() => {
        fireEvent.click(button, {
          target: {
            blur: blurSpy,
          },
        })
      })

      it('should blur the button so it does not remain active', () => {
        expect(blurSpy).toHaveBeenCalledTimes(1)
      })

      it('should handle the click event', () => {
        expect(onClickSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when the onClick callback has not been specified', () => {
    beforeEach(() => {
      wrapper = render(<Button>Click me</Button>)
      button = wrapper.getByText('Click me').parentElement
    })

    describe('when the button is clicked', () => {
      beforeEach(() => {
        fireEvent.click(button, {
          target: {
            blur: blurSpy,
          },
        })
      })

      it('should blur the button so it does not remain active', () => {
        expect(blurSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when the type is specified', () => {
    it.each`
      type        | expected
      ${'button'} | ${'button'}
      ${'submit'} | ${'submit'}
    `('should set the type attribute to $type', ({ type, expected }) => {
      wrapper = render(
        <Button onClick={onClickSpy} type={type}>
          Click me
        </Button>
      )
      button = wrapper.getByText('Click me').parentElement

      expect(button).toHaveAttribute('type', expected)
    })
  })
})
