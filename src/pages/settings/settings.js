import BasePage from './../../util/basepage';

export default class Settings extends BasePage {

    constructor() {
        super();

        this.pageName = 'Settings';
    }

    settingsButton(e) {
        alert('botao de settings');
    }

    render() {
        return (
            `<div class="card">
                <div class="card-content">
                   <div class="card-header">
                     <h3>${this.pageName}</h3>
                   </div>

                 Settings content
                </div>
            </div>`
        )
    }

}