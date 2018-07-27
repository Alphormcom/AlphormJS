/* global describe, it, expect */
import {InvoiceGenerator} from '../build'
import { content } from './TestContent'
describe('Generate PDF', () => {
  it('SHould throw generate an error', () => {
    expect(InvoiceGenerator(content, 'bill', 'download')).toBeFalsy()
  })
})
