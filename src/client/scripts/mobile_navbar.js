class MobileNavbar{
    constructor(mobileMenu, navList){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.activeClass= "active";
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
  
}
const mobileNavbar = new MobileNavbar(
    ".mobile_menu",
    ".nav_list",
);
mobileNavbar.init();