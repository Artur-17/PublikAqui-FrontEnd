import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/models/produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent implements OnInit {
  @Input('input-produtos') produtos: Array<Produto>;
  @Output() onEdit: EventEmitter<Produto> = new EventEmitter<Produto>();

  constructor() { }

  ngOnInit() {
  }

  listaProdutoEdit(produto: Produto) {
    if (this.onEdit) {
      this.onEdit.emit(produto);
    }
  }

}
