import { clsx } from './utils'

it('joins non-empty classnames', (): void => {
  const className = clsx('', 'first', '', 'second', '', undefined, '')

  expect(className).toBe('first second')
})
