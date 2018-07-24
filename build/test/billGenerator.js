'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.billGenerator = undefined

var _pdfmake = require('pdfmake/build/pdfmake')

var _pdfmake2 = _interopRequireDefault(_pdfmake)

var _vfs_fonts = require('pdfmake/build/vfs_fonts')

var _vfs_fonts2 = _interopRequireDefault(_vfs_fonts)

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

_pdfmake2.default.vfs = _vfs_fonts2.default.pdfMake.vfs
var billGenerator = exports.billGenerator = function billGenerator (content, destination, attributes) {
  console.log(content)
  console.log(destination)
  console.log(attributes)
  var docDefinition = {
    pageSize: 'A4',
    defaultStyle: {
      font: 'OpenSans'
    },
    content: [{
      style: 'table',
      table: {
        headerRows: 1,
        widths: ['*', 35, 60, 100],
        body: [['Article', 'Qté', 'P.U HT (€)', 'Montant HT (€)'], this.content.items.map(function (item) {
          return [item.description, item.quantity ? item.quantity : '1', item.PriceExcludingVat, item.PriceExcludingVat * (item.quantity ? item.quantity : '1')]
        })]
      }
    }],
    styles: {
      table: {
        margin: [0, 5, 0, 15]
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
      } } }; if (attributes.do === 'download') {
    _pdfmake2.default.createPdf(docDefinition).download(destination + '.pdf')
  } else if (attributes.do === 'view') {
    _pdfmake2.default.createPdf(docDefinition).open(destination + '.pdf')
  } else if (attributes.do === 'print') {
    _pdfmake2.default.createPdf(docDefinition).print(destination + '.pdf')
  } else {
    console.error('Method undefined')
  }
}
