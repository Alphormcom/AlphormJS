import {InvoiceGenerator} from '../build'

const content = {
  'OrderNumber': 'FA-2018-15896',
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
    'Company': 'My company',
    'VatNumber': '445',
    'AddressLine1': '445 Mount Eden Road',
    'AddressLine2': '',
    'City': 'RABAT',
    'CountryId': 0,
    'Country': 'Afghanistan',
    'PostalCode': '548698',
    'State': 'RABAT',
    'AddressTypeId': 0
  },
  'PriceExcludingVat': 320,
  'VatAmount': 80,
  'TotalPrice': 400,
  'Currency': 'EUR',
  'Items': [
    {
      'Description': 'VMware vSphere 5 : Savoir installer, configurer et administrer',
      'PriceExcludingVat': 176,
      'VatAmount': 44,
      'TotalPrice': 220
    },
    {
      'Description': 'VMware Mirage 3.6 : Savoir installer, configurer et administrer',
      'PriceExcludingVat': 144,
      'VatAmount': 36,
      'TotalPrice': 180
    }
  ]
}
const desitination = 'facture-2015'

InvoiceGenerator(content, desitination, 'buffer')
