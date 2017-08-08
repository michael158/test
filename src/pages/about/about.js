import BasePage from './../../util/basepage';

export default class About extends BasePage {
    constructor() {
        super();
        this.pageName = 'About';
    }

    onViewLoaded() {
        let buttons = document.getElementsByClassName('form-tooltip');
        let self = this;
        Array.prototype.forEach.call(buttons, function (element) {
            element.addEventListener('click', function (e) {
                self.showTooltip(element)
            });
        });
    }

    showForm(e) {
        this.formMobile = document.getElementById('form-mobile');
        this.btnShowFormMobile = document.getElementById('btnShowFormMobile');
        this.formDesktop = document.getElementById('form-desktop');
        this.formActions = document.getElementsByClassName('form-actions');

        this.formDesktop.style.display = 'none';
        this.formMobile.removeAttribute('style');
        this.btnShowFormMobile.style.display = 'none';

        Array.prototype.forEach.call(this.formActions, function (element) {
            element.removeAttribute('style');
        });

    }

    hideForm(e) {
        this.formMobile.style.display = 'none';
        Array.prototype.forEach.call(this.formActions, function (element) {
            element.style.display = 'none';
        });
        this.formDesktop.removeAttribute('style');
        this.btnShowFormMobile.removeAttribute('style');
    }

    showTooltip(element) {
        let self = this;
        let title = element.getAttribute('data-title');
        let html = '<div class="box">';
        html += '<div class="form-group" style="margin: 0">';
        html  += '<div class="arrow"></div>';
        html += '<input type="text" id="tooltip-input" required="required">';
        html += '<label class="control-label" for="input">' + title +'</label><i class="bar"></i>';
        html += '<button class="btn btn-logout btn-blue btn-rounded btn-close-tooltip">Save</button>';
        html += '<button class="btn btn-logout btn-rounded btn-close-tooltip">Cancel</button>';
        html += '</div>';
        html += '</div>';

        element.insertAdjacentHTML('afterend', html);

        document.getElementById('tooltip-input').focus();

        let buttonsCloseTooltip = document.getElementsByClassName('btn-close-tooltip');
        Array.prototype.forEach.call(buttonsCloseTooltip, function (element) {
            element.addEventListener('click', function (e) {
                self.closeTooltip(element);
            });
        });
    }

    closeTooltip(element) {
        let div = element.parentNode.parentNode;
        div.parentNode.removeChild(div);
    }

    render() {
        return (`
                <div class="page">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-header">
                                <h3 class="display-inline-block">${this.pageName}</h3>
                                 <div class="pull-right container-actions">
                                    <button id="btnShowFormMobile" class="btn btn-edit visible-xs" mclick="{showForm()}"><i mclick="{showForm()}" class="ion-edit"></i></button>
                                    <button class="btn btn-edit form-actions" mclick="{hideForm()}" style="display:none">CANCEL</button>
                                    <button class="btn btn-edit form-actions" mclick="{hideForm()}" style="display:none">SAVE</button>
                                 </div>   
                            </div>
                            
                            <div class="form-content" id="form-desktop">
                                <p>
                                    <span><b>Jessica Parker</b></span>
                                    <button class="btn btn-edit form-tooltip visible-md" data-title="Name"><i class="ion-edit"></i></button>
                                </p>
                                <p>
                                    <span><i class="ion-android-globe"></i> www.seller.com</span>
                                    <button class="btn btn-edit form-tooltip visible-md" data-title="Web Site"><i class="ion-edit"></i></button>
                                </p>
                                <p>
                                    <span><i class="ion-ios-telephone-outline"></i> (949)325-68594</span>
                                    <button class="btn btn-edit form-tooltip visible-md" data-title="Phone Number"><i class="ion-edit"></i></button>
                                </p>
                                <p>
                                    <span><i class="ion-ios-home-outline"></i> New port beach, CA</span>
                                    <button class="btn btn-edit form-tooltip visible-md" data-title="CITY, STATE & ZIP"><i class="ion-edit"></i></button>
                                </p>
                            </div>
                            
                            <div class="form-mobile visible-xs" id="form-mobile" style="display: none">
                               <div class="form-group">
                                     <input type="text" required="required">
                                     <label class="control-label" for="input">FIRST NAME</label><i class="bar"></i>
                               </div>
                               
                               <div class="form-group">
                                     <input type="text" required="required">
                                     <label class="control-label" for="input">LAST NAME</label><i class="bar"></i>
                               </div>
                               
                                <div class="form-group">
                                     <input type="text" required="required">
                                     <label class="control-label" for="input">WEB SITE</label><i class="bar"></i>
                               </div>
                               
                                <div class="form-group">
                                     <input type="text" required="required">
                                     <label class="control-label" for="input">PHONE NUMBER</label><i class="bar"></i>
                                </div>
                                
                                 <div class="form-group">
                                     <input type="text" required="required">
                                     <label class="control-label" for="input">CITY, STATE & ZIP</label><i class="bar"></i>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>`
        );
    }

}