import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-paises-listagem',
  templateUrl: './paises-listagem.component.html',
  styleUrls: ['./paises-listagem.component.css']
})
export class PaisesListagemComponent implements OnInit {

  paises: Array<any>;
  paisesFormatado: Array<any>;
  porcentagemMortos: number;
  nomepais: String;

  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.paisesService.listar().subscribe((retorno) => {
      this.paises = retorno
      this.getVision(this.paises);
    }, (error) => {
      // Toast errot and return DEFAULT_PHOTO from Constants
      console.log(error)
    })

  }

  getVision(dados: Array<any>) {
    this.paisesFormatado = [];
    dados.forEach(element => {
      if (element.country.toUpperCase() === "SPAIN" || element.country.toUpperCase() === "CHINA" || element.country.toUpperCase() === "BRAZIL" || element.country.toUpperCase() === "ITALY" || element.country.toUpperCase() === "USA") {

        switch (element.country) {
          case "Italy":
            this.nomepais = "Itália"
            break;
            case "Spain":
              this.nomepais = "Espanha"
              break;
          case "Brazil":
            this.nomepais = "Brasil"
            break;
          case "USA":
            this.nomepais = "Estados Unidos"
            break;
          case "China":
            this.nomepais = "China"
            break;
    
          default:
            break;
        }
        this.porcentagemMortos = (element.deaths / element.cases) * 100;
        this.paisesFormatado.push({
          "pais": this.nomepais,
          "casos": element.cases,
          "casosHoje": element.todayCases,
          "mortes": element.deaths,
          "mortesHoje": element.todayDeaths,
          "mortalidade": `${this.porcentagemMortos.toString().substr(0,4)}%`,
          "curados": element.recovered,
        })
      }
    });
    }; 
  }


