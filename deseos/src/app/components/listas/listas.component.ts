import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-listas',
	templateUrl: './listas.component.html',
	styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
	@Input() terminado = true;
	constructor(private router: Router, public deseosService: DeseosService) {}

	ngOnInit() {}
	listaSeleccionada(lista: Lista) {
		console.log(lista);

		this.router.navigateByUrl(`/tabs/${this.terminado ? 'tab2' : 'tab1'}/agregar/${lista.id}`);
	}
}
