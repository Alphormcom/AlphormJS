import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs
export const billGenerator = (content, destination, attributes) => {
  let DataItems = content.Items.map((item) => [item.Description, (item.Quantity ? item.Quantity : '1'), item.PriceExcludingVat, item.TotalPrice])
  let tableRows = []
  let docBlob = null
  let docDefinition = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [20, 60, 20, 40],
    footer: {text: attributes.footer, style: 'footer'},
    content: [
      {
        style: 'table',
        table: {
          headerRows: 1,
          widths: ['*', 35, 60, 100],
          body: [
            [
              { text: 'Article', style: 'tableHeader' },
              { text: 'Qté', style: 'tableHeader' },
              { text: `P.U HT (${content.Currency === 'EUR' ? '€' : content.Currency})`, style: 'tableHeader' },
              { text: `Montant HT (${content.Currency === 'EUR' ? '€' : content.Currency})`, style: 'tableHeader' }],
            [
              {
                ul: content.Items.map(item => item.Description)
              },
              {
                ul: content.Items.map(item => item.Quantity ? item.Quantity : '1')
              },
              {
                ul: content.Items.map(item => item.PriceExcludingVat)
              },
              {
                ul: content.Items.map(item => item.TotalPrice)
              }
            ],
            [
              { text: '', border: [false, false, false, false] },
              { colSpan: 2, rowSpan: 1, text: 'Total HT', style: 'tableHeader' },
              '',
              parseFloat(content.PriceExcludingVat).toFixed(2)
            ],
            [
              { text: '', border: [false, false, false, false] },
              { colSpan: 2, rowSpan: 1, text: 'Total TVA (20%)', style: 'tableHeader' },
              '',
              parseFloat(content.VatAmount).toFixed(2)
            ],
            [
              { text: '', border: [false, false, false, false] },
              { colSpan: 2, rowSpan: 1, text: `Total TTC (${content.Currency === 'EUR' ? '€' : content.Currency})`, style: 'tableHeader' },
              '',
              parseFloat(content.TotalPrice).toFixed(2) + content.Currency]
          ]
        }
      }

    ],

    styles: {
      tableHeader: {
        fillColor: '#dfe6e9',
        fontSize: 12,
        bold: true
      },
      table: {
        margin: [15, 15, 15, 15]
      },
      footer: {
        fontSize: 7,
        margin: [60, 0, 60, 0],
        alignment: 'center'

      }
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
    pdfMake.createPdf(docDefinition).open({}, window)
  } else if (attributes.do === 'print') {
    pdfMake.createPdf(docDefinition).print(`${destination}.pdf`)
  } else if (attributes.do === 'buffer') {
    pdfMake.createPdf(docDefinition).getDataUrl(function (result) {
      docBlob = result
      console.log(docBlob)
    })
  } else {
    console.error('Method undefined')
  }
  return docBlob
}
