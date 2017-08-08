import Header from './layouts/header/header';

import template from './app.html';

export default class App {

    constructor(options) {
        this.element = options.element;
        this.routes = options.routes;
        this.render();

        window.onhashchange = (e) => {
            this.render();
        };
        /**
         * Click listener event
         */
        document.addEventListener('click', function (e) {
            let onClick = e.target.getAttribute('mclick');
            if(onClick){
                let functionReplace = onClick.replace('()', '').replace('}', '').replace('{', '');
                if(typeof this.instance[functionReplace] !== 'undefined' && typeof this.instance[functionReplace] === 'function'){
                    this.instance[functionReplace](e);
                }
            }
        }.bind(this));
    }

    render() {
        let endpoint = window.location.hash.replace('#', '') == '' ? '/' : window.location.hash.replace('#', '');
        this.routes.forEach((item, index) => {
            if (item.path === endpoint)
                this.renderView(item.component);
        });

    }

    renderView(component) {
        let html = '';
        let header = new Header();
        this.instance = new component();
        html += header.render();
        html +=  this.instance.render();

        document.body.innerHTML = template;
        document.getElementById(this.element).innerHTML = html;

        if(header['onViewLoaded'])
            header.onViewLoaded();

        if(this.instance['onViewLoaded'])
            this.instance.onViewLoaded();
    }



}