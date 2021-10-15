import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Produto } from 'src/models/produto';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.scss']
})
export class ProdutoCardComponent implements OnInit {
  @Input() produto: Produto;
  @Output() onEdit: EventEmitter<Produto> = new EventEmitter<Produto>();

  constructor() { }

  ngOnInit() {
  }

  editar() {
    if (this.onEdit) {
      this.onEdit.emit(this.produto);
    }
  }


}
