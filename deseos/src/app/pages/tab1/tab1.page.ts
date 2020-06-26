import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
	tareas: Lista[] = [];
	constructor(public deseosService: DeseosService, private router: Router, private alertCtrl: AlertController) {
		this.tareas = deseosService.listas;
	}
	async agregarLista() {
		const alert = await this.alertCtrl.create({
			header: 'Nueva Lista',
			inputs: [
				{
					name: 'titulo',
					type: 'text',
					placeholder: 'Nombre de la lista',
				},
			],
			buttons: [
				{
					text: 'Cancelar',
					role: 'Cancel',
					handler: () => {
						console.log('Cancelar');
					},
				},
				{
					text: 'Crear',
					handler: (data) => {
						if (data.titulo.length === 0) return;
						console.log(data.titulo);
						const listaId = this.deseosService.crearLista(data.titulo);
						console.log(listaId);
						this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
					},
				},
			],
		});
		await alert.present();
	}
	listaSeleccionada(lista: Lista) {
		console.log(lista);
		this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
	}
}
