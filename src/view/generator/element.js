module.exports = (type, attributesArray, text) => {
  let element = document.createElement(type);

  for (let i = 0; i < attributesArray.length; i++) {
    let elementAttributes = attributesArray[i];
    for (let attribute in elementAttributes) {
      element.setAttribute(attribute, elementAttributes[attribute]);
    }
  }


  if (text) {
    element.innerText = text;
  }

  return element;
}
