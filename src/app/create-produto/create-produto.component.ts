import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})
export class CreateProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  submitted = false;

  constructor(private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit() {
  }

  newProduto(): void {
    this.submitted = false;
    this.produto = new Produto();
  }

  save() {
    this.produtoService.createProduto(this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/produtos']);
  }
}
