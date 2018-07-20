import PDFDocument from 'pdfkit'
import * as fs from 'fs'

export const billGenerator = (content, destination, attributes) => {
  let doc = new PDFDocument({
    Size: attributes.size,
    Title: attributes.title,
    Author: attributes.author,
    Subject: attributes.subject,
    CreationDate: attributes.creationDate,
    ModDate: attributes.creationDate
  })
  // pdfMake.createPdf(content).download(`${destination}.pdf`)
  doc.pipe(fs.createWriteStream(`/bill/${destination}.pdf`))
  doc.font('Fira Code')
    .fontSize(18)
    .text(content.title, 100, 100)
  doc.addPage()
  doc.rect(100, 120, 250, 250)
  doc.fillColor('red')

  doc.end()
}
