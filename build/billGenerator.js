'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.billGenerator = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _pdfmake = require('pdfmake/build/pdfmake');

var _pdfmake2 = _interopRequireDefault(_pdfmake);

var _vfs_fonts = require('pdfmake/build/vfs_fonts');

var _vfs_fonts2 = _interopRequireDefault(_vfs_fonts);

var _logo = require('./logo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

_pdfmake2.default.vfs = _vfs_fonts2.default.pdfMake.vfs;

var methodes = {
  DOWNLOAD: 'download',
  VIEW: 'view',
  PRINT: 'print',
  BUFFER: 'buffer'
};
var billGenerator = exports.billGenerator = function billGenerator(content, destination, method) {
  if (!method) {
    throw new Error('Method is not defined');
  }
  if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) !== 'object') {
    throw new Error('Content must be an object');
  } else if (typeof destination !== 'string') {
    throw new Error('Destination must be a string');
  } else if (typeof method !== 'string') {
    throw new Error('output Method must be a string');
  }

  var DataItems = content.Items.map(function (item) {
    return [item.Description, item.Quantity ? item.Quantity : '1', item.PriceExcludingVat, item.TotalPrice];
  });
  var docBlob = null;
  var checkNullProperty = function checkNullProperty(property) {
    return property === null ? property : '';
  };
  var attributes = {
    size: 'A4',
    title: content.OrderNumber,
    author: 'Alphard Technology',
    subject: 'Facture',
    creationDate: (0, _moment2.default)(content.IssueDate).format('YYYY-MM-DD'),
    footer: 'Alphard Technologies 9 Charles Fourier, Evry 91030 | T\xE9l : +33 (0)1 77 62 45 80 | E-mail: contact@alphorm.com | www.alphorm.com\n             Siret : 53046978200011 - Naf : 6203Z - N\xB0 TVA intracom : FR04530469782 - Capital : 21 000,00 \u20AC - N\xB0 D\xE9claration : 11 91 07268 91'
  };

  var docDefinition = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [20, 90, 20, 40],
    footer: { text: attributes.footer, style: 'footer' },
    content: [{
      alignment: 'justify',
      columns: [{
        image: _logo.logo,
        fit: [200, 80],
        margin: [20, 0, 20, 40]
      }, {
        width: 200,
        table: {
          widths: [80, 80],
          margin: [80, 80, 80, 80],
          body: [[{ text: 'Facture', style: 'label', border: [true, true, false, true] }, { text: content.OrderNumber, style: 'label', border: [false, true, true, true], borderRadius: [50, 50, 50, 50] }], [{ text: 'Date Facturation:', style: 'issueDate', border: [false, false, false, false] }, { text: (0, _moment2.default)(content.IssueDate).format('L'), style: 'issueDate', border: [false, false, false, false] }], [{ text: 'Méthode  :', style: 'paymentMethod', border: [false, false, false, false] }, { text: content.PaymentMethod, style: 'paymentMethod', border: [false, false, false, false] }]]
        },
        layout: {
          vLineWidth: function vLineWidth() {
            return 0.5;
          },
          hLineWidth: function hLineWidth() {
            return 0.5;
          },
          hLineColor: '#9E9E9E',
          vLineColor: '#9E9E9E',
          paddingLeft: function paddingLeft() {
            return 6;
          },
          paddingTop: function paddingTop() {
            return 6;
          },
          paddingRight: function paddingRight() {
            return 6;
          },
          paddingBottom: function paddingBottom() {
            return 6;
          }
        }
      }]
    }, {
      margin: [18, 0, 0, 0],
      table: {
        body: [[{ text: 'par Alphard Technologies SARL\n 9, rue Charles Fourier\n 91030 Evry', border: [false, false, false, false], bold: true }], [{ text: 'Client :', border: [false, false, false, false], bold: true, fontSize: 14, decoration: 'underline', marginTop: 10 }], [{
          text: '' + (content.User.LastName + ' ' + content.User.FirstName),
          bold: true,
          fontSize: 12,
          border: [false, false, false, false],
          margin: [0, 0, 0, 0],
          paddingLeft: function paddingLeft() {
            return 0;
          },
          paddingTop: function paddingTop() {
            return 0;
          },
          paddingRight: function paddingRight() {
            return 0;
          },
          paddingBottom: function paddingBottom() {
            return 0;
          }
        }], [{
          text: checkNullProperty(content.BillingAddress.Company) + '\n                     ' + checkNullProperty(content.BillingAddress.AddressLine1) + '\n                     ' + checkNullProperty(content.BillingAddress.AddressLine2) + '\n                     ' + checkNullProperty(content.BillingAddress.PostalCode) + ' ' + checkNullProperty(content.BillingAddress.City) + '\n                     ' + checkNullProperty(content.BillingAddress.State) + ' ' + checkNullProperty(content.BillingAddress.Country),
          fontSize: 10,
          border: [false, false, false, false],
          margin: [0, 0, 0, 0],
          paddingLeft: function paddingLeft() {
            return 0;
          },
          paddingTop: function paddingTop() {
            return 0;
          },
          paddingRight: function paddingRight() {
            return 0;
          },
          paddingBottom: function paddingBottom() {
            return 0;
          }
        }], [{
          text: 'Email : ' + checkNullProperty(content.User.Email),
          fontSize: 10,
          border: [false, false, false, false],
          margin: [0, 0, 0, 0],
          paddingLeft: function paddingLeft() {
            return 0;
          },
          paddingTop: function paddingTop() {
            return 0;
          },
          paddingRight: function paddingRight() {
            return 0;
          },
          paddingBottom: function paddingBottom() {
            return 0;
          }
        }], [{
          text: 'Téléphone : ' + checkNullProperty(content.User.Phone) + ' ',
          fontSize: 10,
          border: [false, false, false, false],
          margin: [0, 0, 0, 0],
          paddingLeft: function paddingLeft() {
            return 0;
          },
          paddingTop: function paddingTop() {
            return 0;
          },
          paddingRight: function paddingRight() {
            return 0;
          },
          paddingBottom: function paddingBottom() {
            return 0;
          }
        }]]
      }
    }, {
      style: 'pageStyle',
      table: {
        headerRows: 1,
        widths: ['*', 35, 60, 100],
        body: [[{ text: 'Article', style: 'tableHeader' }, { text: 'Qté', style: 'tableHeader' }, { text: 'P.U HT (' + (content.Currency === 'EUR' ? '€' : content.Currency) + ')', style: 'tableHeader' }, { text: 'Montant HT (' + (content.Currency === 'EUR' ? '€' : content.Currency) + ')', style: 'tableHeader' }]].concat(_toConsumableArray(DataItems), [[{ text: '', border: [false, false, false, false] }, { colSpan: 2, rowSpan: 1, text: 'Total HT', style: 'tableHeader' }, '', parseFloat(content.PriceExcludingVat).toFixed(2)], [{ text: '', border: [false, false, false, false] }, { colSpan: 2, rowSpan: 1, text: 'Total TVA (20%)', style: 'tableHeader' }, '', parseFloat(content.VatAmount).toFixed(2)], [{ text: '', border: [false, false, false, false] }, { colSpan: 2, rowSpan: 1, text: 'Total TTC (' + (content.Currency === 'EUR' ? '€' : content.Currency) + ')', style: 'tableHeader' }, '', parseFloat(content.TotalPrice).toFixed(2) + content.Currency]])
      },
      layout: {
        hLineWidth: function hLineWidth(i, node) {
          return i === 0 || i === node.table.body.length ? 1.5 : 1;
        },
        vLineWidth: function vLineWidth(i, node) {
          return i === 0 || i === node.table.widths.length ? 1.5 : 1;
        },
        hLineColor: function hLineColor(i, node) {
          return i === 0 || i === node.table.body.length ? 'black' : 'gray';
        },
        vLineColor: function vLineColor(i, node) {
          return i === 0 || i === node.table.widths.length ? 'black' : 'gray';
        }
      }
    }],

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
      paymentMethod: {
        fontSize: 9
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
  };
  switch (method) {
    case methodes.DOWNLOAD:
      _pdfmake2.default.createPdf(docDefinition).download(destination + '.pdf');
      break;
    case methodes.PRINT:
      _pdfmake2.default.createPdf(docDefinition).print(destination + '.pdf');
      break;
    case methodes.VIEW:
      _pdfmake2.default.createPdf(docDefinition).open({}, window);
      break;
    case methodes.BUFFER:
      _pdfmake2.default.createPdf(docDefinition).getDataUrl(function (result) {
        docBlob = result;
        return docBlob;
      });
      break;
    default:
      throw new Error('Method undefined');
  }
};