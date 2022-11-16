import { createAction, props } from '@ngrx/store';

//export type filtrosValidos = "todos" | "pendientes" | "completados";
export enum filtrosValidos {
    Todos = 1,
    Pendientes,
    Completados
}

export const setFilter = createAction('[Filtro] Set Filtro', props<{ filtro: filtrosValidos }>());


