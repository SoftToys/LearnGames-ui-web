//import {inject} from 'aurelia-framework';


//import {logLevel} from 'aurelia-logging';




//@inject(Router)
export class App {
    
    configureRouter(config, router) {
        config.title = 'Learning Games';
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Welcome' },
            { route: 'build', name: 'nuild', moduleId: 'build-game', nav: true, title: 'Build Game' },
            { route: 'matchGame', name: 'matchGame', moduleId: 'matchGame', nav: false },
                        
        ]);

        this.router = router;

    }

}
