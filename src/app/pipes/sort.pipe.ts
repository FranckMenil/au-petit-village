import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {
  transform(products: any[], order: string): any[] {
    if (!products) return [];
    const sorted = [...products];
    return sorted.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
  }
}
