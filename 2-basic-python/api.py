""" A module with two dawson-valid Python functions """

import json
from countrycode import countrycode

def myfunction(event, context):
    """ This function is dawson-valid """
    print(event, context)
    return "Hello Function"

myfunction.api = {
    "path": "test"
}

def myfunction2(event, context):
    """ This function is dawson-valid """
    print(event, context)
    return { "hi": "Hello world JSON" }

myfunction2.api = {
    "path": "test2",
    "responseContentType": "application/json"
}

def myfunction3(event, context):
    """ This function is dawson-valid """
    print(event, context)
    cc = countrycode(codes=['Algeria', 'United States'], origin='country_name', target='iso3c')
    return ','.join(cc)

myfunction3.api = {
    "path": "test3"
}

def myfunctionWithError(event, context):
    """ This function is dawson-valid """
    print(event, context)
    raise Exception(json.dumps({
      'httpStatus': 500,
      'response': 'This function failed'
    }))

myfunctionWithError.api = {
    "path": "testError"
}
