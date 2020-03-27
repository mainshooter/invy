import elementCreater  from '../generator/element.js';
import { Modal } from '../modal/modal.js';
import { formGenerator } from '../generator/form.js';

export class PhotoProductView {

  constructor(product, mainController) {
    this.mainController = mainController;
    this.product = product;
    this.drawings = [];
  }

  present() {
    let bodyContainer = elementCreater('div', [], '');
    let modal = new Modal('Voeg product opties toe', bodyContainer);
    let photoContainer = elementCreater('div', [{}], '');
    let commentContainer = elementCreater('div', [{}], '');

    this.drawCanvas = elementCreater('canvas', [{}], '');
    this.drawCanvas.setAttribute('width', 300);
    this.drawCanvas.setAttribute('height', 300);

    if (Array.isArray(this.product.drawings)) {
      this.drawings = this.product.drawings;
    }

    if (this.product.image) {
      this.addPhoto();
    }
    let form = formGenerator([{
      'labelText': 'Foto uploaden',
      'name': 'file_upload',
      'type': 'file',
      'class': 'file_upload form-control'
    }], () => {
        this.drawings = [];
        this.product.drawings = this.drawings;
        let uploadField = form.querySelector('.file_upload');
        this.mainController.saveProductUpload(this.product, uploadField);
        this.addPhoto();
    }, true);

    let commentForm = formGenerator([{
      'labelText': 'Commentaar',
      'name': 'product_comment',
      'type': 'text',
      'class': 'form-control',
      'value': this.product.comment
    }], () => {
      let comment = commentForm.querySelector('input[name=product_comment]').value;
      this.product.comment = comment;
      this.mainController.saveProduct(this.product);
    }, true);


    photoContainer.appendChild(this.drawCanvas);
    photoContainer.appendChild(form);

    commentContainer.appendChild(commentForm);

    bodyContainer.appendChild(photoContainer);
    bodyContainer.appendChild(commentContainer);

    this.container = modal.present();
  }

  addPhoto() {
    let ctx = this.drawCanvas.getContext("2d");
    ctx.clearRect(0, 0, 300, 300);
    let image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 300, 300);
      for (let i = 0; i < this.drawings.length; i++) {
        let drawing = this.drawings[i];
        ctx.fillStyle = "green";
        ctx.fillRect(drawing.x, drawing.y, 5, 5);
      }
      this.addDrawAction();
    }
    image.src = this.product.image;
  }

  addDrawAction() {
    let ctx = this.drawCanvas.getContext("2d");
    let canDraw = false;
    this.drawCanvas.addEventListener('mousedown', e => {
      canDraw = true;
    });
    this.drawCanvas.addEventListener('mouseup', e => {
      canDraw = false;
      this.product.drawings = this.drawings;
      this.mainController.saveProduct(this.product);
    });

    this.drawCanvas.addEventListener('mousemove', e => {
      if (canDraw) {
        let target = event.target;
        let rect = target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        ctx.fillStyle = "green";
        ctx.fillRect(x, y, 5, 5);
        this.drawings.push({
          'x': x,
          'y': y,
        });
      }
    });
  }

}
