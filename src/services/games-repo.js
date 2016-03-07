
export class GamesRepository {

    constructor() {

        this._games = [
            { 'name': 'Suffix Game', 'imgSrc': 'https://static-s.aa-cdn.net/img/ios/452590579/f5cd61cc4ed079237a02b90fb3dc644c?v=1' },
            { 'name': 'Preffix Game', 'imgSrc': 'https://static-s.aa-cdn.net/img/ios/452590579/f5cd61cc4ed079237a02b90fb3dc644c?v=1' },
            { 'name': 'Preffix2 Game', 'imgSrc': 'https://static-s.aa-cdn.net/img/ios/452590579/f5cd61cc4ed079237a02b90fb3dc644c?v=1' },
            { 'name': 'Preffix3 Game', 'imgSrc': 'https://static-s.aa-cdn.net/img/ios/452590579/f5cd61cc4ed079237a02b90fb3dc644c?v=1' },
            { 'name': 'Preffix4 Game', 'imgSrc': 'https://static-s.aa-cdn.net/img/ios/452590579/f5cd61cc4ed079237a02b90fb3dc644c?v=1' },
            { 'name': 'Preffix5 Game', 'imgSrc': 'https://static-s.aa-cdn.net/img/ios/452590579/f5cd61cc4ed079237a02b90fb3dc644c?v=1' },
        ];
    }
    
    get games(){
        
        return this._games;
    }
    



}   