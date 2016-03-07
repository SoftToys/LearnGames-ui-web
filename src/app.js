//import {inject} from 'aurelia-framework';


//import {logLevel} from 'aurelia-logging';




//@inject(Router)
export class App {
    
    configureRouter(config, router) {
        config.title = 'Learning Games';
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Welcome' },
            { route: 'Build', name: 'Build', moduleId: 'build-game', nav: true, title: 'Build Game' }            
        ]);

        this.router = router;

    }

}
