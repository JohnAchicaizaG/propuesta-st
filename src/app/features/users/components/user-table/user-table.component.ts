import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SpanishPaginatorIntl } from '../../../../core/services/paginator-intl.service';
import { UserRow } from '../../../../core/models/user.model';

/**
 * Componente de tabla de usuarios.
 *
 * Recibe el arreglo de usuarios y el valor de filtro como `@Input` y gestiona
 * internamente el `MatTableDataSource` y el `MatPaginator`. El paginador se
 * posiciona sobre la tabla; para que Angular detecte el cambio de datos a
 * tiempo se llama manualmente a `ChangeDetectorRef.detectChanges()` en
 * `ngAfterViewInit`.
 *
 * Columnas: acciones · estado · usuario · fechaCreacion · nombre ·
 * email · rol · ultimaConexion · ipLogin
 *
 * @example
 * ```html
 * <app-user-table [users]="users" [filterValue]="filterValue" />
 * ```
 */
@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: SpanishPaginatorIntl }],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent implements AfterViewInit, OnChanges {
  /** Referencia al paginador declarado en el template con `#tablePaginator`. */
  @ViewChild('tablePaginator') paginator!: MatPaginator;

  /** Lista de filas de usuario a mostrar en la tabla. */
  @Input() users: UserRow[] = [];

  /**
   * Texto de filtro normalizado (minúsculas, sin espacios al inicio/fin).
   * Se asigna directamente a `MatTableDataSource.filter` en `ngOnChanges`.
   */
  @Input() filterValue = '';

  /** Columnas visibles en el orden de renderizado. */
  readonly displayedColumns: Array<keyof UserRow | 'acciones'> = [
    'acciones',
    'status',
    'usuario',
    'fechaCreacion',
    'nombre',
    'email',
    'rol',
    'ultimaConexion',
    'ipLogin',
  ];

  /** Fuente de datos de la tabla; el paginador se asigna en `ngAfterViewInit`. */
  readonly usersDataSource = new MatTableDataSource<UserRow>([]);

  constructor(private readonly cdr: ChangeDetectorRef) {}

  /**
   * Se ejecuta después de que la vista está lista.
   * Asigna el paginador al DataSource y fuerza la detección de cambios para
   * evitar que el paginador muestre "0 de 0" al estar posicionado encima de la tabla.
   */
  ngAfterViewInit(): void {
    this.usersDataSource.paginator = this.paginator;
    this.cdr.detectChanges();
  }

  /**
   * Reacciona a cambios en los `@Input`.
   * - `users`: actualiza los datos del DataSource.
   * - `filterValue`: aplica el filtro de texto al DataSource.
   *
   * @param changes - Mapa de cambios detectados por Angular.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users']) {
      this.usersDataSource.data = this.users;
    }
    if (changes['filterValue']) {
      this.usersDataSource.filter = this.filterValue;
    }
  }
}
