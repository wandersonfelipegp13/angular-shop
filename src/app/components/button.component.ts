import { Component, Input } from '@angular/core';

@Component({
  selector: 'w4d-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  @Input() label: string;
  buttonText: string = 'Click here';

  getAlert(number: number) {
    if (this.label == 'Carrinho') alert('Adicionado ao carrinho');
    if (this.label == 'Comentar') alert('Comentário salvo');
    if (this.label == 'Comprar') alert('Compra finalizada');
    if (this.label == 'Favoritar') alert(`Adicionado aos Favoritos #${number}`);
  }
}
