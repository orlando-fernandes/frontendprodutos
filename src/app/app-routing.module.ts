import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { UpdateProdutoComponent } from './update-produto/update-produto.component';

const routes: Routes = [
  { path: '', redirectTo: 'produto', pathMatch: 'full' },
  { path: 'produtos', component: ProdutoListComponent },
  { path: 'add', component: CreateProdutoComponent },
  { path: 'update/:codigo', component: UpdateProdutoComponent },
  { path: 'details/:codigo', component: ProdutoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
