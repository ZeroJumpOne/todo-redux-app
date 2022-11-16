import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';

export const initialState: actions.filtrosValidos = 1;

export const filtroReducer = createReducer(
  initialState,
  on(actions.setFilter, (state, { filtro }) => filtro = filtro),
);