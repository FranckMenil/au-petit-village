import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../../pipes/search.pipe';
import { SortPipe } from '../../pipes/sort.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, SearchPipe, SortPipe] // Importez ce dont vous avez besoin dans le composant
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  sortOrder: string = 'asc'; // 'asc' pour croissant, 'desc' pour décroissant

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Produits chargés :', this.products); // Vérifiez dans la console si les produits sont chargés
      },
      error: (error) => {
        console.error('Erreur lors du chargement des produits', error);
      },
      complete: () => {
        console.log('Chargement des produits terminé.');
      }
    });
  }
    // Méthode appelée lors de la recherche
    updateSearchTerm(event: Event): void {
      this.searchTerm = (event.target as HTMLInputElement).value; // Mettre à jour le terme de recherche
    }
  
    // Méthode appelée pour changer l'ordre de tri
    updateSortOrder(order: string): void {
      this.sortOrder = order; // Mettre à jour l'ordre de tri
    }
}
