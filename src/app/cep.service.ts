import { Injectable } from '@angular/core';
import { Http, HttpClient } from '@angular/common/http';
import {Cep} from './cep';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CepService {

  constructor(private http:HttpClient) { }

  buscar(cep:string){
    return this.http
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .subscribe(data => this.converterRespostaParaCep(data));
  }

  private converterRespostaParaCep(cepNaResposta):Cep{
    let cep = new Cep();
    cep.cep = cepNaResposta.cep;
    cep.logradouro = cepNaResposta.logradouro;
    cep.complemento = cepNaResposta.complemento;
    cep.bairro = cepNaResposta.bairro;
    cep.cidade = cepNaResposta.localidade;
    cep.estado = cepNaResposta.uf;

    return cep;
  }
}
