import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
	selector: 'app-agregar',
	templateUrl: './agregar.page.html',
	styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
	lista: Lista;
	nombreItem: string;
	constructor(private router: ActivatedRoute, private deseosServices: DeseosService) {
		const listaId = this.router.snapshot.paramMap.get('listaId');
		this.nombreItem = '';
		this.lista = this.deseosServices.obtenerLista(listaId);
	}

	ngOnInit() {}

	agregarItem() {
		if (this.nombreItem.length === 0) {
		}
		const nuevoItem = new ListaItem(this.nombreItem);
		this.lista.items.push(nuevoItem);
		this.nombreItem = '';
		this.deseosServices.guardarStorage();
	}
}
