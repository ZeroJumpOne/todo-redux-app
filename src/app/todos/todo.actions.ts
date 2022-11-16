import { createAction, props } from "@ngrx/store";

export const plus               = createAction('[TODO] Plus',       props<{ nombre: string }>());
export const toggle             = createAction('[TODO] Toggle',     props<{ id: number }>());
export const edit               = createAction('[TODO] Editar',     props<{ id: number, texto: string }>());
export const borrar             = createAction('[TODO] Borrar',     props<{ id: number }>());
export const toggleAll          = createAction('[TODO] Toggle All', props<{ completado: boolean }>());
export const limpiarCompletados = createAction('[TODO] Liimpiar Completados');