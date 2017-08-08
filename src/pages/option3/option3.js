import BasePage from './../../util/basepage';

export default class Option3 extends BasePage{

    constructor(){
        super();
        this.pageName = 'Option 3';
        this.content = 'Hello World option 3'
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