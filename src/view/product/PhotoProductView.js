import elementCreater  from '../generator/element.js';
import { Modal } from '../modal/modal.js';
import { formGenerator } from '../generator/form.js';

export class PhotoProductView {

  constructor(product, mainController) {
    this.mainController = mainController;
    this.product = product;
  }

  present() {
    let bodyContainer = elementCreater('div', [], '');
    let modal = new Modal('Voeg product opties toe', bodyContainer);

    let form = formGenerator([{
      'labelText': 'Foto uploaden',
      'name': 'file_upload',
      'type': 'file',
      'class': 'file_upload form-control'
    }], () => {
        let uploadField = form.querySelector('.file_upload');
        this.mainController.saveProductUpload(this.product, uploadField);
        this.container.remove();
    }, true);

    bodyContainer.appendChild(form);

    this.container = modal.present();
  }

}
