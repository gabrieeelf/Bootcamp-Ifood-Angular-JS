import {Component,Input,OnInit,OnChanges,SimpleChanges} from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
	@Input() nome: string = '';

	constructor() {
		console.log(`Construtor ${this.nome}`);
	}

	ngOnChanges(): void {
		//Quando ocorre alguma modificação com o component
		console.log(`OnChanges ${this.nome}`);
	}

	ngOnInit(): void {
		//Executado assim quando o component nasce
		this.nome = this.nome + 'x';
		console.log(`OnInit ${this.nome}`);
	}
}
