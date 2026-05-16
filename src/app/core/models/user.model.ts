export type Status = 'activo' | 'inactivo';

export interface StatCard {
  label: string;
  value: number;
  icon: string;
  gradient: string;
}

export interface UserRow {
  status: Status;
  usuario: string;
  fechaCreacion: string;
  nombre: string;
  email: string;
  rol: string;
  ultimaConexion: string;
  ipLogin: string;
}
