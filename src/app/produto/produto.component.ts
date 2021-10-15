import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/models/produto';
import { ProdutoCadastroComponent } from '../produto-cadastro/produto-cadastro.component';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produtos: Array<Produto>

  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    this.listar();

  }

  inserir() {
    const modal = this.modalService.open(ProdutoCadastroComponent, {
      backdrop: 'static',
      animation: true,
      keyboard: false,
      centered: true,
      size: 'md'
    });

    (modal.componentInstance as ProdutoCadastroComponent).produto = new Produto();

    modal.result.then(produto => {
      if (produto) {
        this.produtos.push(produto);
      }
    });
  }

  listar() {
    this.httpClient.get<Array<Produto>>('https://localhost:44324/api/produto/listar').subscribe(
      (apiRetorno: Array<Produto>) => {
        this.produtos = apiRetorno;
      }
    );
  }

  editar(produto: Produto) {
    const modal = this.modalService.open(ProdutoCadastroComponent, {
      backdrop: 'static',
      animation: true,
      keyboard: false,
      centered: true,
      size: 'md'
    });

    (modal.componentInstance as ProdutoCadastroComponent).produto = produto;

    modal.result.then((produto) => {
      if (produto) {
        for (let i = 0; i < this.produtos.length; i++) {
          if (this.produtos[i].id == produto.id) {
            this.produtos[i] = produto;
            break;
          }
        }
      }
    });
  }
}
