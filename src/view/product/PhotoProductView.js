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

    this.drawCanvas = elementCreater('canvas', [{}], '');
    if (this.product.image) {
      let ctx = this.drawCanvas.getContext("2d");
      let image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 5, 5);
      }
      image.src = this.product.image;
      this.addDrawAction();
    }
    let form = formGenerator([{
      'labelText': 'Foto uploaden',
      'name': 'file_upload',
      'type': 'file',
      'class': 'file_upload form-control'
    }], () => {
        let uploadField = form.querySelector('.file_upload');
        this.mainController.saveProductUpload(this.product, uploadField);
        this.addDrawAction();
    }, true);
    bodyContainer.appendChild(this.drawCanvas);
    bodyContainer.appendChild(form);

    this.container = modal.present();
  }

  addDrawAction() {
    let ctx = this.drawCanvas.getContext("2d");

    this.drawCanvas.setAttribute('width', 300);
    this.drawCanvas.setAttribute('height', 300);
    let canDraw = false;
    this.drawCanvas.addEventListener('mousedown', e => {
      canDraw = true;
    });
    this.drawCanvas.addEventListener('mouseup', e => {
      canDraw = false;
    });

    this.drawCanvas.addEventListener('mousemove', e => {
      if (canDraw) {
        let target = event.target;
        var rect = target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        ctx.fillStyle = "green";
        ctx.fillRect(x, y, 5, 5);
      }
    });
  }

}
