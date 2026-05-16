import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StatCard } from '../../../../core/models/user.model';

/**
 * Componente de tarjetas de estadísticas.
 *
 * Muestra una cuadrícula de tarjetas resumen con métricas clave
 * (usuarios totales, activos, inactivos, roles, conexiones recientes).
 * El tooltip en cada etiqueta muestra el texto completo cuando se trunca.
 *
 * @example
 * ```html
 * <app-stat-cards [statCards]="statCards" />
 * ```
 */
@Component({
  selector: 'app-stat-cards',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './stat-cards.component.html',
})
export class StatCardsComponent {
  /**
   * Lista de tarjetas a renderizar.
   * Cada tarjeta define etiqueta, valor numérico, ícono Material y gradiente CSS.
   */
  @Input() statCards: StatCard[] = [];
}
