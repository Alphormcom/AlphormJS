/* global describe, it, expect */
import billGenerator from '../build/generator'

describe('Generate PDF', () => {
  const billData = { content: 'This is an sample PDF printed with pdfMake' }

  it('SHould generate a pdf', () => {
    expect(billGenerator(billData, 'bill')).toBeCalled()
  })
})
