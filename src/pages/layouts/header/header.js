import BasePage from './../../../util/basepage';
import routes from './../../routes';

export default class Header extends BasePage {

    constructor() {
        super();
        this.routes = routes;
    }

    onViewLoaded() {
        this.menuItems = document.getElementsByClassName('menu-item');

        // SET MENU ACTIVE
        let actualEndpoint = '/' + window.location.hash;

        Array.prototype.forEach.call(this.menuItems, function (element) {
            if(actualEndpoint === element.childNodes[1].getAttribute('href'))
                element.classList.add('active');

            if(actualEndpoint == '/')
                if(element.childNodes[1].getAttribute('href') == '/#/about')
                    element.classList.add('active');
        });
    }

    render() {
        return (
            `<header>
    <div class="card">
        <div class="card-body">
            <div class="text-right">
                <button class="btn btn-logout btn-rounded">
                    LOG OUT
                </button>
            </div>

            <div class="text-center container-btn-upload visible-md">
                <button class="btn btn-inverse">
                    <i class="ion-ios-camera"></i> <span>Upload Cover Image</span>
                </button>
            </div>
            
                <div class="profile-photo center-xs">
                    <img src="/src/assets/img/profile_image.jpg" width="200">
                </div>

                <div class="profile-info">
                     <h3>Jessica Parker</h3>

                     <span><i class="ion-ios-location-outline"></i> New Port Beach</span>
                     <span><i class="ion-ios-telephone-outline"></i> (949)325-68594</span>
                </div>

                <div class="profile-stars">
                    <i class="ion-android-star star-icon"></i>
                    <i class="ion-android-star star-icon"></i>
                    <i class="ion-android-star star-icon"></i>
                    <i class="ion-android-star star-icon"></i>
                    <i class="ion-android-star-outline star-icon"></i>
                  <span>6 Reviews</span>
                </div>
            
                <div class="profile-followers visible-xs">
                     <i class="ion-ios-plus"></i>
                <span>15 Folowers</span>
           </div>
        </div>

        <div class="card-footer">
            <ul class="menu">
                <li class="menu-item">
                    <a href="/#/about">ABOUT</a>
                </li>

                <li class="menu-item">
                    <a href="/#/settings">SETTINGS</a>
                </li>

                <li class="menu-item">
                    <a href="/#/option1">OPTION 1</a>
                </li>

                <li class="menu-item">
                    <a href="/#/option2">OPTION 2</a>
                </li>
                <!--<li class="menu-item">-->
                    <!--<a href="/#/option3">OPTION 3</a>-->
                <!--</li>-->
            </ul>
            
            
            <div class="profile-followers visible-md">
                <i class="ion-ios-plus"></i>
                <span>15 Folowers</span>
            </div>
        </div>
    </div>
</header>
`);
    }

}