import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'

import Button from './Button'

describe('common render', () => {
  it('should render without crashing', () => {
    render(<Button />)
  })
})
