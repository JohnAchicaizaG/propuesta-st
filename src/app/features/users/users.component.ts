import { Component } from '@angular/core';
import { StatCard, UserRow } from '../../core/models/user.model';
import { MOCK_STAT_CARDS, MOCK_USERS } from './data/users.mock';
import { StatCardsComponent } from './components/stat-cards/stat-cards.component';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { UserTableComponent } from './components/user-table/user-table.component';

/**
 * Página principal de gestión de usuarios.
 *
 * Actúa como contenedor (smart component) que:
 * - Mantiene el estado de los datos (`statCards`, `users`) y del filtro activo (`filterValue`).
 * - Compone los tres sub-componentes de la feature: tarjetas, filtro y tabla.
 * - Propaga el filtro desde `UserFilterComponent` hacia `UserTableComponent`.
 *
 * @example
 * Ruta por defecto: `{ path: '', loadComponent: () => UsersComponent }`
 */
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [StatCardsComponent, UserFilterComponent, UserTableComponent],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  /** Texto de filtro activo; se pasa a `UserTableComponent` como `@Input`. */
  filterValue = '';

  /**
   * Tarjetas de métricas mostradas en la parte superior del dashboard.
   * Datos provenientes de {@link MOCK_STAT_CARDS}.
   */
  readonly statCards: StatCard[] = MOCK_STAT_CARDS;

  /**
   * Filas de usuarios mostradas en la tabla.
   * Datos provenientes de {@link MOCK_USERS}. En producción vendría de un servicio HTTP.
   */
  readonly users: UserRow[] = MOCK_USERS;

  /**
   * Recibe el texto emitido por `UserFilterComponent` y actualiza `filterValue`,
   * lo que propaga el cambio hacia `UserTableComponent` vía binding.
   *
   * @param value - Texto normalizado (minúsculas, sin espacios al inicio/fin).
   */
  onFilterChange(value: string): void {
    this.filterValue = value;
  }
}
