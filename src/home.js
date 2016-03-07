import {inject} from 'aurelia-framework';
import {GamesRepository} from './services/games-repo'


@inject(GamesRepository)
export class Home {

    constructor(repo) {
        this.games = repo.games;

    }

    activate() {

    }



}