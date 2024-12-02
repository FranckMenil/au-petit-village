import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private productsUrl = 'assets/products.json'; // Chemin vers le fichier JSON

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
