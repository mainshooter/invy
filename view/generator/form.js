function formGenerator(inputFields, callBack) {
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

  let submit = document.createElement("input");
  submit.type = "submit";
  submit.addEventListener('click', event => {
    event.preventDefault();
    callBack(form);
  });
  form.appendChild(submit);
  return form;
}

export { formGenerator }
