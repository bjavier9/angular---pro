import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
	providedIn: 'root',
})
export class DeseosService {
	listas: Lista[] = [];
	constructor() {
		// const lista1 = new Lista('Recolactar caliche');
		// const lista2 = new Lista('Correr con el perro');
		// this.listas.push(lista1, lista2);
		this.cargarStorage();
	}
	crearLista(titulo: string) {
		console.log(titulo);
		const nuevaLista = new Lista(titulo);
		console.log(nuevaLista);
		this.listas.push(nuevaLista);
		console.log(this.listas);
		this.guardarStorage();
		return nuevaLista.id;
	}

	obtenerLista(id: string | number) {
		id = Number(id);
		return this.listas.find((listaData) => {
			return listaData.id === id;
		});
	}
	borrarLista(lista: Lista) {
		this.listas = this.listas.filter((listaData) => listaData.id !== lista.id);
		this.guardarStorage();
	}
	guardarStorage() {
		localStorage.setItem('data', JSON.stringify(this.listas));
	}
	cargarStorage() {
		const cargar = JSON.parse(localStorage.getItem('data'));
		this.listas = cargar == null ? [] : cargar;
	}
}
