import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

/**
 * Componente de filtro de búsqueda de usuarios.
 *
 * Presenta un campo de texto para buscar usuarios por cualquier campo.
 * Normaliza el valor (trim + lowercase) antes de emitirlo, listo para
 * asignarlo directamente a `MatTableDataSource.filter`.
 *
 * @example
 * ```html
 * <app-user-filter (filterChange)="onFilterChange($event)" />
 * ```
 */
@Component({
  selector: 'app-user-filter',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './user-filter.component.html',
  styleUrl: './user-filter.component.scss',
})
export class UserFilterComponent {
  /**
   * Emite el texto de búsqueda normalizado cada vez que el usuario escribe.
   * El valor ya viene en minúsculas y sin espacios al inicio/fin.
   */
  @Output() filterChange = new EventEmitter<string>();

  /**
   * Maneja el evento `input` del campo de texto.
   * Normaliza el valor y lo emite a través de {@link filterChange}.
   *
   * @param value - Texto crudo capturado del input.
   */
  onFilter(value: string): void {
    this.filterChange.emit(value.trim().toLowerCase());
  }
}
