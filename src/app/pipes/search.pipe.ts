import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(products: any[], searchTerm: string): any[] {
    if (!products) return [];
    if (!searchTerm) return products;

    searchTerm = searchTerm.toLowerCase();

    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm)
    );
  }
}
