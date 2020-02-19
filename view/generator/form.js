function formGenerator(inputFields, callBack) {
  let form = document.createElement("form");

  inputFields.forEach(attributes => {
    let input = document.createElement("input");
    for (let attribute in attributes) {
      input.setAttribute(attribute, attributes[attribute])
    }
    form.appendChild(input);
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
