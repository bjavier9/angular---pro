import { ListaItem } from './lista-item.model';

export class Lista {
	id: number;
	titulo: string;
	creadEn: Date;
	terminadoEn: Date;
	terminada: boolean;
	items: ListaItem[];
	constructor(titulo: string) {
		this.titulo = titulo;
		this.creadEn = new Date();
		this.terminada = false;
		this.items = [];
		this.id = new Date().getTime();
	}
}
