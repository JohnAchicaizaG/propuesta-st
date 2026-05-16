import { StatCard, UserRow } from '../../../core/models/user.model';

/**
 * Tarjetas de métricas estáticas del dashboard de usuarios.
 * En producción estos valores vendrían calculados desde un endpoint de resumen.
 */
export const MOCK_STAT_CARDS: StatCard[] = [
  { label: 'Usuarios',                        value: 5,  icon: 'group',          gradient: 'from-orange-400 to-amber-500' },
  { label: 'Activos',                          value: 3,  icon: 'check_circle',   gradient: 'from-orange-400 to-amber-500' },
  { label: 'Inactivos',                        value: 2,  icon: 'cancel',         gradient: 'from-orange-400 to-amber-500' },
  { label: 'Roles creados',                    value: 18, icon: 'manage_accounts', gradient: 'from-orange-400 to-amber-500' },
  { label: 'Usuarios conectados recientemente', value: 1,  icon: 'verified_user', gradient: 'from-orange-400 to-amber-500' },
];

/**
 * Datos mock de la tabla de usuarios.
 * Las IPs siguen el rango RFC 5737 (documentación/ejemplos) para evitar
 * referenciar direcciones reales. Usuarios inactivos usan `'-'` en los
 * campos `ultimaConexion` e `ipLogin`.
 */
export const MOCK_USERS: UserRow[] = [
  {
    status: 'activo',
    usuario: 'USER TEST',
    fechaCreacion: '2025-09-02 15:56:39 PM',
    nombre: 'ANGEL CEVALLOS',
    email: 'A@GURUSOFT.COM',
    rol: 'ROL ADMIN GS',
    ultimaConexion: '2026-05-15 14:38:59 PM',
    ipLogin: '192.0.2.10',
  },
  {
    status: 'activo',
    usuario: 'LUIS.VELASTEGUI',
    fechaCreacion: '2026-05-13 16:31:03 PM',
    nombre: 'LUIS VELASTEGUI',
    email: 'ALBERTO.VELASTEGUI@GURU-SOFT.COM',
    rol: 'ROL ADMIN GS',
    ultimaConexion: '-',
    ipLogin: '-',
  },
  {
    status: 'inactivo',
    usuario: 'TEST 3',
    fechaCreacion: '2026-05-14 20:49:35 PM',
    nombre: 'TEST TRES',
    email: 'TEST@GURU-SOFT.COM',
    rol: 'TEST15',
    ultimaConexion: '-',
    ipLogin: '-',
  },
  {
    status: 'activo',
    usuario: 'MARIA.GARCIA',
    fechaCreacion: '2026-01-10 09:15:00 AM',
    nombre: 'MARIA GARCIA',
    email: 'M.GARCIA@GURU-SOFT.COM',
    rol: 'ROL EDITOR',
    ultimaConexion: '2026-05-14 08:22:11 AM',
    ipLogin: '192.0.2.45',
  },
  {
    status: 'activo',
    usuario: 'CARLOS.MENDEZ',
    fechaCreacion: '2026-02-20 11:30:45 AM',
    nombre: 'CARLOS MENDEZ',
    email: 'C.MENDEZ@GURU-SOFT.COM',
    rol: 'ROL VIEWER',
    ultimaConexion: '2026-05-13 17:05:33 PM',
    ipLogin: '198.51.100.22',
  },
  {
    status: 'inactivo',
    usuario: 'ANA.TORRES',
    fechaCreacion: '2025-11-05 14:00:00 PM',
    nombre: 'ANA TORRES',
    email: 'A.TORRES@GURU-SOFT.COM',
    rol: 'ROL SOPORTE',
    ultimaConexion: '-',
    ipLogin: '-',
  },
  {
    status: 'activo',
    usuario: 'JORGE.RUIZ',
    fechaCreacion: '2026-03-15 08:45:22 AM',
    nombre: 'JORGE RUIZ',
    email: 'J.RUIZ@GURU-SOFT.COM',
    rol: 'ROL ADMIN GS',
    ultimaConexion: '2026-05-15 09:00:00 AM',
    ipLogin: '198.51.100.77',
  },
  {
    status: 'activo',
    usuario: 'SOFIA.LEON',
    fechaCreacion: '2026-04-01 13:20:10 PM',
    nombre: 'SOFIA LEON',
    email: 'S.LEON@GURU-SOFT.COM',
    rol: 'ROL EDITOR',
    ultimaConexion: '2026-05-12 16:44:55 PM',
    ipLogin: '203.0.113.55',
  },
  {
    status: 'inactivo',
    usuario: 'PEDRO.VEGA',
    fechaCreacion: '2025-08-18 10:10:10 AM',
    nombre: 'PEDRO VEGA',
    email: 'P.VEGA@GURU-SOFT.COM',
    rol: 'ROL VIEWER',
    ultimaConexion: '-',
    ipLogin: '-',
  },
  {
    status: 'activo',
    usuario: 'LUCIA.PAREDES',
    fechaCreacion: '2026-05-01 07:30:00 AM',
    nombre: 'LUCIA PAREDES',
    email: 'L.PAREDES@GURU-SOFT.COM',
    rol: 'ROL SOPORTE',
    ultimaConexion: '2026-05-15 11:58:02 AM',
    ipLogin: '203.0.113.90',
  },
];
