function formGenerator(inputFields, callBack, withSubmit) {
  let form = document.createElement("form");

  inputFields.forEach(attributes => {
    let formGroup = document.createElement('div');
    formGroup.classList.add('form-group');
    let label = document.createElement('label');
    label.innerText = attributes.labelText;
    let input = document.createElement("input");
    input.classList.add('form-control');
    for (let attribute in attributes) {
      if (attribute != 'labelText') {
        input.setAttribute(attribute, attributes[attribute])
      }
    }
    formGroup.appendChild(label);
    formGroup.appendChild(input);
    form.appendChild(formGroup);
  });
  if (withSubmit) {
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.addEventListener('click', event => {
      event.preventDefault();
      callBack(form);
    });
    form.appendChild(submit);
  }
  form.getData = () => {
    let result = [];
    let formElements = form.querySelectorAll('.form-control');
    for (let i = 0; i < formElements.length; i++) {
      let element = formElements[i];
      console.log(element);
      result.push({
        "name": element.getAttribute("id"),
        "value": element.value,
      });
    }
    return result;
  }

  return form;
}

export { formGenerator }
