import {billGenerator} from '../src/billGenerator'

const content = {
  'OrderNumber': 'FA-20187',
  'IssueDate': '2018-07-23T00:00:00',
  'PaymentMethod': 'SMS',
  'User': {
    'LastName': 'Andrei',
    'FirstName': 'Nicora',
    'Email': 'andrei@alphorm.com',
    'Phone': '06655484545'
  },
  'BillingAddress': {
    'AddressId': null,
    'Company': 'Alphard Tech, ltd',
    'VatNumber': '145',
    'AddressLine1': null,
    'AddressLine2': null,
    'City': 'RABAT',
    'CountryId': 0,
    'Country': 'France',
    'PostalCode': 27182,
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
    },
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
    },
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

billGenerator(content, desitination, 'buffer')
