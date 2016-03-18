import {inject} from 'aurelia-framework';
import {GamesRepository} from './services/games-repo'

@inject(GamesRepository)
export class MatchGame {
  constructor(repo) {
    this.repo = repo;
    this.game = null;
  }

  activate(params) {
    this.game = this.repo.get({ id: Number.parseInt(params.gameId) });
    /*  return this.http.fetch('contacts/' + params.id)
        .then(response => response.json())
        .then(contact => this.contact = contact);*/
  }

}
