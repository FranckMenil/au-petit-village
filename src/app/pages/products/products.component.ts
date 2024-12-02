import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductComponent implements OnInit {
  products: any[] = []; // Liste des produits

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Charger les produits via le service
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des produits', error);
      },
      complete: () => {
        console.log('Chargement terminé');
      }
    });
  }
}
