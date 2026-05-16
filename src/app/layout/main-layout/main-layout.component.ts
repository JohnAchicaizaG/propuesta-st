import { Component } from '@angular/core';

/**
 * Shell de diseño principal de la aplicación.
 *
 * Envuelve cualquier contenido proyectado (`<ng-content />`) dentro de un
 * contenedor responsivo centrado con fondo gris claro. Debe usarse como
 * componente raíz en `AppComponent` para garantizar un diseño consistente
 * en todas las rutas.
 *
 * @example
 * ```html
 * <app-main-layout>
 *   <router-outlet />
 * </app-main-layout>
 * ```
 */
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}
