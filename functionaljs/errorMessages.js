const currentInputValues = {
    firstName: "",
    lastName: "",
    zipCode: "",
    state: ""
}

const inputCriteria = {
    firstName: [
        value => value.length >= 2 ? "" : "First name must be at least 2 characters."
    ],
    lastName: [
        value => value.length >= 2 ? "" : "Last name must be at least 2 characters."
    ],
    zipCode: [
        value => value.length >= 5 ? "" : "Zip code must be at least 5 characters."
    ],
    state: [
        value => value.length >= 2 ? "" : "State must be at least 2 characters."
    ],
}

const getErrorMessages = (inputs, criteria) => {
    return Object.keys(inputs).reduce((acc, fieldName) => [
        ...acc,
        ...criteria[fieldName].map(test => test(inputs[fieldName])),
    ], [])
}


console.log(getErrorMessages(currentInputValues, inputCriteria))