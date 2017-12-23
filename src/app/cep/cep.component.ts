import { Component, OnInit } from '@angular/core';
import {Cep} from "../cep";
import {CepService} from "../cep.service";

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep = new Cep();
  isLoading = false;
  constructor(private cepService:CepService) { }

  ngOnInit() {
  }

  buscar(){
    this.isLoading = true;
    /*this.cepService.buscar(this.cep.cep)
        .then((cep:Cep) => {
          this.isLoading = false;
          this.cep = cep;
        })
        .catch(() => {
          this.isLoading = false;
          let cep = this.cep.cep;
          this.cep = new Cep();
          this.cep.cep = cep;
          alert('Não possível continuar a busca');
        })*/

    this.cepService.buscar(this.cep.cep);
  }
}
