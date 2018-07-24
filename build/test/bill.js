'use strict'

var billGenerator = require('./billGenerator').billGenerator()

var attributes = {
  size: 'A4',
  title: 'Facture-XYZ',
  author: 'Alphard Technology',
  subject: 'Facture',
  creationDate: '2015-09-31',
  do: 'print'
}
const contents = {
  title: attributes.title,
  orderNumber: 'FA-2015-09',
  issueDate: attributes.creationDate,
  paymentMethod: 'Paypal',
  User: {
    firstname: 'Adiss',
    lastname: 'Abiba',
    email: 'zeus@pharaon.com',
    phone: '+1 (665) 225 2254 252'
  },
  billlingAdress: {
    VatNumber: 'VAT-25452',
    Company: 'OmniZya',
    AddressLine1: '10 rue 2, bloc E',
    AddressLine2: 'Laglita, SidiNaimi',
    Zipcode: '27182',
    City: 'Bouskoura',
    State: 'Grand Casablanca',
    CountryId: 'MA'
  },
  PriceExcludingVat: '15.9',
  VatAmount: '3.18',
  totalPrice: 15.9 + 3.18,
  currency: '€',
  items: [{
    description: 'LifeTime subscription',
    PriceExcludingVat: 15.9
  },
  {
    description: 'LifeTime subscription',
    PriceExcludingVat: 15.9
  }]
}
var desitination = 'facture-2015'

billGenerator(contents, desitination, attributes)
