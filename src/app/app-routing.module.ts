import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ProdutoComponent } from './produto/produto.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BoasVindasComponent
  },
  {
    path: 'produto',
    pathMatch: 'full',
    component: ProdutoComponent
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
