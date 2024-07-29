import { Produto } from '../produto';
import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ProdutoListComponent } from '../produto-list/produto-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.css']
})
export class ProdutoDetailsComponent implements OnInit {

  codigo: number;
  produto: Produto;

  constructor(private route: ActivatedRoute,private router: Router,
    private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produto = new Produto();

    this.codigo = this.route.snapshot.params['codigo'];
    
    this.produtoService.getProduto(this.codigo)
      .subscribe(data => {
        console.log(data)
        this.produto = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['produtos']);
  }
}
