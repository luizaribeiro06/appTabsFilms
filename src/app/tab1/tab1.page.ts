import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(public router: Router) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Shrek',
      lancamento: '22/06/2001 (BR)',
      duracao: '1h30m',
      classificacao: 8,
      cartaz: 'https://images-ext-2.discordapp.net/external/AUO7bNqxF8RBFhd9JIGm6T1qldXcyRha1g3JRKw8PTY/https/www.themoviedb.org/t/p/w600_and_h900_bestv2/abw1mIJIjG9X3xSEffE9siLcOkN.jpg?width=395&height=593',
      generos: ['Animação', 'Comédia', 'Aventura'],
      pagina: '/shrek',
      favorito: false
    },
    {
      nome: 'Super Mario Bross',
      lancamento: '05/04/2023 (BR)',
      duracao: '1h32m',
      classificacao: 8,
      cartaz: 'https://images-ext-2.discordapp.net/external/pfzpqyLURHmnX8n5NccRGLDIYmwnM45dBWCT6dR8nZI/https/www.themoviedb.org/t/p/w600_and_h900_bestv2/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg?width=395&height=593',
      generos: ['Aventura', 'Família', 'Animação'],
      pagina: '/mario',
      favorito: false
    },
    {
      nome: 'Invocação do Mal 3',
      lancamento: '04/06/2021 (BR)',
      duracao: '1h51m',
      classificacao: 7,
      cartaz: 'https://images-ext-2.discordapp.net/external/YRaQ7ojcl6Anz0iDEaMA07_pLXPjLO5O_ECxfsf9YWU/https/www.themoviedb.org/t/p/w600_and_h900_bestv2/tLmaOXT9rMb17ISQDURKQIu3Okk.jpg?width=395&height=593',
      generos: ['Terror', 'Thriller','Mistério'],
      pagina: '/mal',
      favorito: false
    },
    {
      nome: 'Gigantes de Aço',
      lancamento: '21/10/2011 (BR)',
      duracao: '2h07m',
      classificacao: 7,
      cartaz: 'https://images-ext-1.discordapp.net/external/t9jMImfZocOamvIR5WcmqVcLScNgNmnKoCLxG10orzM/https/www.themoviedb.org/t/p/w600_and_h900_bestv2/pp74uUjwQTknGPqNrerj4FvU0ce.jpg?width=395&height=593',
      generos: ['Ação', 'Ficção Científica', 'Drama'],
      pagina: '/aço',
      favorito: false
    },
    {
      nome: 'Truque de Mestre',
      lancamento: '05/07/2013 (BR)',
      duracao: '1h56m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/sUi3a3BTTku0vyLjJQgKtiWCok7.jpg',
      generos: ['Crime','Suspense'],
      pagina: '/truque',
      favorito: false
    }

  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}
