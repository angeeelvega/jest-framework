const { palindrome } = require('../utils/for_testing')

test('palindrome of reconocer', () => {
  const result = palindrome('reconocer')

  expect(result).toBe('reconocer')
})

test('palindrome of empty string', () => {
  const result = palindrome('')

  expect(result).toBe('')
})

test('palindrome of undefined', () => {
  const result = palindrome()

  expect(result).toBeUndefined()
  
})