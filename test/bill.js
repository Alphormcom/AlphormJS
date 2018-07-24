import {billGenerator} from '../src/billGenerator'

const attributes = {
  size: 'A4', // LEGAL....
  title: 'Facture-XYZ',
  author: 'Alphard Technology',
  subject: 'Facture',
  creationDate: '2015-09-31',
  do: 'buffer',
  footer: `Alphard Technologies 9 Charles Fourier, Evry 91030 | Tél : +33 (0)1 77 62 45 80 | E-mail: contact@alphorm.com | www.alphorm.com
  Siret : 53046978200011 - Naf : 6203Z - N° TVA intracom : FR04530469782 - Capital : 21 000,00 € - N° Déclaration : 11 91 07268 91`
}
const content = {
  'OrderNumber': 'FA-20187',
  'IssueDate': '2018-07-23T00:00:00',
  'PaymentMethod': 'SMS',
  'User': {
    'LastName': 'Andrei',
    'FirstName': 'Nicora',
    'Email': 'andrei@alphorm.com',
    'Phone': null
  },
  'BillingAddress': {
    'AddressId': null,
    'Company': 'Alphorm Dev. ',
    'VatNumber': '145',
    'AddressLine1': 'Dar lol test',
    'AddressLine2': null,
    'City': 'RABAT',
    'CountryId': 0,
    'Country': null,
    'PostalCode': null,
    'State': null,
    'AddressTypeId': 0
  },
  'PriceExcludingVat': 0,
  'VatAmount': 0,
  'TotalPrice': 400,
  'Currency': 'EUR',
  'Items': [
    {
      'Description': 'VMware vSphere 5 : Savoir installer, configurer et administrer',
      'PriceExcludingVat': 176,
      'VatAmount': 0,
      'TotalPrice': 176
    },
    {
      'Description': 'VMware Mirage 3.6 : Savoir installer, configurer et administrer',
      'PriceExcludingVat': 144,
      'VatAmount': 0,
      'TotalPrice': 144
    }
  ]
}
const desitination = 'facture-2015'

billGenerator(content, desitination, attributes)
