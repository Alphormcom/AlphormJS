import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs
export const billGenerator = (content, destination, attributes) => {
  let docDefinition = {
    pageSize: attributes.size,
    defaultStyle: {
      font: 'OpenSans'
    }
  }
  // let doc = new PDFDocument({
  //   Size: attributes.size,
  //   Title: attributes.title,
  //   Author: attributes.author,
  //   Subject: attributes.subject,
  //   CreationDate: attributes.creationDate,
  //   ModDate: attributes.creationDate
  // })
  // pdfMake.createPdf(content).download(`${destination}.pdf`)
  // doc.pipe(fs.createWriteStream(`/bill/${destination}.pdf`))
  // doc.font('Fira Code')
  //   .fontSize(18)
  //   .text(content.title, 100, 100)
  // doc.addPage()
  // doc.rect(100, 120, 250, 250)
  // doc.fillColor('red')

  // doc.end()
  if (attributes.do === 'download') {
    pdfMake.createPdf(docDefinition).download(`${destination}.pdf`)
  } else if (attributes.do === 'view') {
    pdfMake.createPdf(docDefinition).open(`${destination}.pdf`)
  } else if (attributes.do === 'print') {
    pdfMake.createPdf(docDefinition).print(`${destination}.pdf`)
  } else {
    console.error('Method undefined')
  }
}
