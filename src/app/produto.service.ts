import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:8080/api/v1/produtos';

  constructor(private http: HttpClient) { }

  getProduto(codigo: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${codigo}`);
  }

  createProduto(produto: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, produto);
  }

  updateProduto(codigo: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${codigo}`, value);
  }

  deleteProduto(codigo: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${codigo}`, { responseType: 'text' });
  }

  getProdutosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
