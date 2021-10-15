import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoCardComponent } from './produto-card/produto-card.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoCardComponent,
    ProdutoListaComponent,
    ProdutoComponent,
    ProdutoCadastroComponent,
    PaginaNaoEncontradaComponent,
    BoasVindasComponent
   ],
  imports: [
    BrowserModule,
    NgbModalModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
