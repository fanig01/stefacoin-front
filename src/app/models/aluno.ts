import { Usuario } from 'src/app/models/usuario';
export interface Aluno extends Usuario{
  idade?: string;
  formacao?: string;
  cursos?: {};
}
