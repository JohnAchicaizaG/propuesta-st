# Propuesta - Dashboard de Usuarios

Frontend en Angular para gestion de usuarios con:
- Tarjetas de metricas
- Filtro de busqueda
- Tabla con paginacion
- Arquitectura por features

Stack principal: Angular 19, Angular Material 19 y Tailwind CSS v4.

## Requisitos

- Node.js 18+
- npm 9+

## Inicio Rapido

```bash
npm install
ng s
```

Aplicacion en: http://localhost:4200

## Comandos

```bash
ng s           # desarrollo
npm run build  # build produccion
npm test       # pruebas unitarias
```

## Estructura

```text
src/app/
	core/
		models/
		services/
	layout/
		main-layout/
	features/
		users/
			data/
			components/
				stat-cards/
				user-filter/
				user-table/
```

## Notas

- Los datos actuales de usuarios y estadisticas estan en mocks dentro de `features/users/data`.
- El paginador esta configurado en espanol.
