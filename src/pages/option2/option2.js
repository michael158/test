import BasePage from './../../util/basepage';

export default class Option2 extends BasePage{

    constructor(){
        super();
        this.pageName = 'Option 2';
        this.content = 'Hello World option 2'
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