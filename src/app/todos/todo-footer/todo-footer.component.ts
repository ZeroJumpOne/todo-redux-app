import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { todoReducer } from '../todo.reducer';
import * as actionsTodos from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 1;
  filtros: actions.filtrosValidos[] = [actions.filtrosValidos.Todos, actions.filtrosValidos.Completados, actions.filtrosValidos.Pendientes];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) { 

  }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe( filtro => {
    //   this.filtroActual = filtro;
    // });
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;

      this.pendientes = state.todos.filter( todo => !todo.completado).length;

    });
  }

  dimeFiltro(filtro: actions.filtrosValidos): string {
    let name: string = actions.filtrosValidos[filtro]; //Convierto el enumerador a su nombre en cadena
    return  name;
  }

  cambiarFiltro(filtro: actions.filtrosValidos): void {
    //console.log(filtro);
    this.store.dispatch(actions.setFilter( {filtro: filtro}));
  }

  limpiar(): void {
    this.store.dispatch(actionsTodos.limpiarCompletados());
  }

}
