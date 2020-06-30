import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
	selector: 'app-listas',
	templateUrl: './listas.component.html',
	styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
	@ViewChild(IonList) lista: IonList;
	@Input() terminado = true;
	constructor(private router: Router, private alertCtrl: AlertController, public deseosService: DeseosService) {}

	ngOnInit() {}
	listaSeleccionada(lista: Lista) {
		console.log(lista);
		if (this.terminado) {
			this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
		} else {
			this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
		}
	}
	borrarLista(lista: Lista) {
		console.log(lista.id);
		this.deseosService.borrarLista(lista);
	}
	async cambiarTitulo(lista: Lista) {
		const alert = await this.alertCtrl.create({
			header: 'Nueva Lista',
			inputs: [
				{
					name: 'titulo',
					type: 'text',
					value: lista.titulo,
					placeholder: 'Nombre de la lista',
				},
			],
			buttons: [
				{
					text: 'Cancelar',
					role: 'Cancel',
					handler: () => {
						this.lista.closeSlidingItems();
						console.log('Cancelar');
					},
				},
				{
					text: 'Crear',
					handler: (data) => {
						this.lista.closeSlidingItems();
						if (data.titulo.length === 0) return;
						this.deseosService.cambiarTitulo(lista, data.titulo);
						this.router.navigateByUrl(`/tabs/tab1`);
					},
				},
			],
		});
		await alert.present();
		console.log(lista.titulo);
	}
}
