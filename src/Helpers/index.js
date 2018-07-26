export const checkNullProperty = (property) => !property ? '\0' : property
export const CleanAddress = (addressObject) => {
  let CleanedInfo = {}
  Object.keys(addressObject).forEach((prop) => {
    if (addressObject[prop]) { CleanedInfo[prop] = addressObject[prop] }
  })
  return CleanedInfo
}
