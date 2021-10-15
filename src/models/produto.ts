export class Produto {
  id: number;
  codigoBarras: string;
  descricao: string;
  quantidade: number;
  inativo: false;
  deletado: false;
  categoriaNome: string;
  precoCusto: number;
  precoVenda: number;
  desconto: number;
  precoPromocional: number;
  foto: string;

  constructor() {
    this.id = 0;
    this.codigoBarras = '';
    this.descricao = '';
    this.quantidade = 0;
    this.inativo = false;
    this.deletado = false;
    this.categoriaNome = '';
    this.precoCusto = 0;
    this.precoVenda = 0;
    this.desconto = 0;
    this.precoPromocional = 0;
    this.foto = '';
  }
}

