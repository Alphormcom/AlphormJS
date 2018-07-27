import { SafeCastToString } from '../src/Helpers'

const TestObject = {
  FalsyProp: null,
  PropOne: 'Brown',
  PropTwo: 'Fox'
}

describe('⌚ Helpers Test', () => {
  it('SafeCaseToString return a null character if object have a falsy props', () => {
    expect(SafeCastToString(TestObject.FalsyProp)).toBe('\0')
  })

  it('SafeCastToString return the value of prop', () => {
    let testCase = TestObject.PropTwo
    let expected = 'Fox'
    expect(SafeCastToString(TestObject.PropTwo)).toBe('Fox')
  })
})
