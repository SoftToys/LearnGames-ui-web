import {inject} from 'aurelia-framework';
import {Game} from "../models/game";
import _ from "underscore";
import {getLogger} from 'aurelia-logging';

@inject(getLogger('GamesRepository'))
export class GamesRepository {


  constructor(logger) {

    this.logger = logger;
    this._games = [
      new Game(1, 'Suffix Game', "some description1", 'https://static-s.aa-cdn.net/img/ios/452590579/f5cd61cc4ed079237a02b90fb3dc644c?v=1'),
      new Game(2, 'Suffix Game', "some description1", 'https://static-s.aa-cdn.net/img/ios/452590579/f5cd61cc4ed079237a02b90fb3dc644c?v=1'),
      new Game(3, 'Suffix Game', "some description1", 'https://static-s.aa-cdn.net/img/ios/452590579/f5cd61cc4ed079237a02b90fb3dc644c?v=1'),
      new Game(4, 'Suffix Game', "some description1", 'https://static-s.aa-cdn.net/img/ios/452590579/f5cd61cc4ed079237a02b90fb3dc644c?v=1'),
      new Game(5, 'Suffix Game', "some description1", 'https://static-s.aa-cdn.net/img/ios/452590579/f5cd61cc4ed079237a02b90fb3dc644c?v=1')
    ];
  }

  get games() {
    return this._games;
  }

  get(filter) {        
    var game = _.findWhere(this._games, filter);
    this.logger.info(`found game with id ${game.id}`);    
    return game;
  }




}   
