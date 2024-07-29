import { ProdutoDetailsComponent } from '../produto-details/produto-details.component';
import { Observable } from "rxjs";
import { ProdutoService } from "../produto.service";
import { Produto } from "../produto";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-produto-list",
  templateUrl: "./produto-list.component.html",
  styleUrls: ["./produto-list.component.css"]
})
export class ProdutoListComponent implements OnInit {
  produtos: Observable<Produto[]>;

  constructor(private produtoService: ProdutoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.produtos = this.produtoService.getProdutosList();
  }

  deleteProduto(codigo: number) {
    this.produtoService.deleteProduto(codigo)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  produtoDetails(codigo: number){
    this.router.navigate(['details', codigo]);
  }

  updateProduto(codigo: number){
    this.router.navigate(['update', codigo]);
  }
}
