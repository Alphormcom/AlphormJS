import Moment from 'moment'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { logo } from './logo'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export const billGenerator = (content, destination, attributes) => {
  let DataItems = content.Items.map((item) => [item.Description, (item.Quantity ? item.Quantity : '1'), item.PriceExcludingVat, item.TotalPrice])
  let docBlob = null
  let docDefinition = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [20, 90, 20, 40],
    footer: {text: attributes.footer, style: 'footer'},
    content: [
      {
        alignment: 'justify',
        columns: [
          {
            image: logo,
            fit: [200, 80],
            margin: [20, 0, 20, 40]
          },
          {
            width: 200,
            table: {
              widths: [80, 80],
              margin: [80, 80, 80, 80],
              body: [
                [{ text: 'Facture', style: 'label', border: [true, true, false, true] }, { text: content.OrderNumber, style: 'label', border: [false, true, true, true], borderRadius: [50, 50, 50, 50] }],
                [{ text: 'Date Facturation:', style: 'issueDate', border: [false, false, false, false] }, { text: Moment(content.IssueDate).format('L'), style: 'issueDate', border: [false, false, false, false] }]
              ]
            },
            layout: {
              vLineWidth: () => 0.5,
              hLineWidth: () => 0.5,
              hLineColor: '#9E9E9E',
              vLineColor: '#9E9E9E',
              paddingLeft: () => 6,
              paddingTop: () => 6,
              paddingRight: () => 6,
              paddingBottom: () => 6
            }
          }
        ]
      },
      {
        margin: [18, 0, 0, 0],
        table: {
          body: [
            [{ text: 'par Alphard Technologies SARL\n 9, rue Charles Fourier\n 91030 Evry', border: [false, false, false, false], bold: true }],
            [{ text: 'Client :', border: [false, false, false, false], bold: true, fontSize: 14, decoration: 'underline', paddingTop: () => 8, marginTop: 10 }],
            [{
              text: `${content.User.LastName + ' ' + content.User.FirstName}`,
              bold: true,
              fontSize: 14,
              border: [false, false, false, false],
              margin: [0, 0, 0, 0]
            }],
            [{
              text: `
                ${content.BillingAddress.Company}\n
                ${content.BillingAddress.AddressLine1}\n
                ${content.BillingAddress.AddressLine2 === null ? (content.BillingAddress.PostalCode + ' ' + content.BillingAddress.City + ', ' + content.BillingAddress.Country) : content.BillingAddress.AddressLine2}`,
              fontSize: 10,
              border: [false, false, false, false],
              margin: [0, 0, 0, 0],
              paddingLeft: () => 0,
              paddingTop: () => 0,
              paddingRight: () => 0,
              paddingBottom: () => 0
            }],
            [{
              text: `Email : ${content.User.Email}`,
              fontSize: 10,
              border: [false, false, false, false],
              margin: [0, 0, 0, 0],
              paddingLeft: () => 0,
              paddingTop: () => 0,
              paddingRight: () => 0,
              paddingBottom: () => 0
            }],
            [{
              text: `${content.User.Phone === null ? '' : 'Téléphone :' + content.User.Phone} `,
              fontSize: 10,
              border: [false, false, false, false],
              margin: [0, 0, 0, 0],
              paddingLeft: () => 0,
              paddingTop: () => 0,
              paddingRight: () => 0,
              paddingBottom: () => 0
            }]
          ]
        }
      },
      {
        style: 'pageStyle',
        table: {
          headerRows: 1,
          widths: ['*', 35, 60, 100],
          body: [
            [
              { text: 'Article', style: 'tableHeader' },
              { text: 'Qté', style: 'tableHeader' },
              { text: `P.U HT (${content.Currency === 'EUR' ? '€' : content.Currency})`, style: 'tableHeader' },
              { text: `Montant HT (${content.Currency === 'EUR' ? '€' : content.Currency})`, style: 'tableHeader' }],
            ...DataItems,
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
        },
        layout: {
          hLineWidth: function (i, node) {
            return (i === 0 || i === node.table.body.length) ? 1.5 : 1
          },
          vLineWidth: function (i, node) {
            return (i === 0 || i === node.table.widths.length) ? 1.5 : 1
          },
          hLineColor: function (i, node) {
            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray'
          },
          vLineColor: function (i, node) {
            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray'
          }
        }
      }

    ],

    styles: {
      tableHeader: {
        fillColor: '#dfe6e9',
        fontSize: 12,
        bold: true
      },
      label: {
        fillColor: '#dfe6e9',
        bold: true,
        fontSize: 18,
        color: '#727272'

      },
      issueDate: {
        fontSize: 10,
        bold: true
      },
      pageStyle: {
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
