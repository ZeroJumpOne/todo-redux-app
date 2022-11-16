import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import * as actions from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Estudiar angular'),
    new Todo('Estudiar redux'),
    new Todo('Aplicar lo aprendio'),
    new Todo('Presentar proyecto')
];

export const todoReducer = createReducer(
    initialState,
    on(actions.plus,   (state, { nombre }) => [...state, new Todo( nombre ) ] ),
    on(actions.borrar, (state, { id }) => state.filter( todo => todo.id !== id)),
    on(actions.toggle, (state, { id })  => {
        return state.map( todo => {
            if (todo.id === id){
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo
            }
        });
    }),
    on(actions.edit, (state, { id, texto })  => {
        return state.map( todo => {
            if (todo.id === id){
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo
            }
        });
    }),
    on(actions.toggleAll, (state, { completado }) => {
        return state.map( todo => {
            return {
                ...todo,
                completado: completado
            }
        });
    }),
    on(actions.limpiarCompletados, (state) => {
        return state.filter( todo => !todo.completado);
    })
)