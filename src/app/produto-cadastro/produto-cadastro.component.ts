import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/models/produto';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.scss']
})
export class ProdutoCadastroComponent implements OnInit {
  form: FormGroup;
  produto: Produto;

  constructor(private activeModal: NgbActiveModal, private httpClient: HttpClient,
    private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if(!this.produto) {
      this.produto = new Produto();
    }

    this.form = this.formBuilder.group({
      id: new FormControl(this.produto.id, []),
      codigoBarras: new FormControl(this.produto.codigoBarras),
      nome: new FormControl(this.produto.descricao, [Validators.required]),
      quantidade: new FormControl(this.produto.quantidade, []),
      precoCusto: new FormControl(this.produto.precoCusto, []),
      precoVenda: new FormControl(this.produto.precoCusto, []),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      alert('O preenchimento tem problemas. Verifique.');
      return;
    }

    let link;

    if ((this.produto.id) && (this.produto.id > 0)) {
      this.form.get('id').setValue(this.produto.id);
      link = 'https://localhost:44324/api/produto/atualizar';
    } else {
      this.form.get('id').setValue(0);
      link = 'https://localhost:44324/api/produto/inserir';
    }

    this.httpClient.post(link, this.form.value).subscribe(
      (apiRetorno: any) => {
        if (apiRetorno.sucesso) {
          this.activeModal.close(apiRetorno.produto);
        }
      });
  }

  fechar() {
    this.activeModal.close();
  }

}
