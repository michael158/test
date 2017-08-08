import BasePage from './../../util/basepage';

export default class Option1 extends BasePage {

    constructor() {
        super();
        this.pageName = 'Option 1';
        this.content = 'Hello World option 1'
    }

    render() {
        return (`
            <div class="card">
                 <div class="card-content">
                      <div class="card-header">
                        <h3>${this.pageName}</h3>
                      </div>
             ${this.content}
                 </div>
            </div>
       `)
    }

}