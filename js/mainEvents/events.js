new Vue({
    el: '#app',
    data: {
        isImageVisible: true,
        counter:0
    },
    methods: {
        clickers(){
            this.counter += 1 
        },
        changeBackgroundColor() {
            document.body.style.backgroundColor = 'black';
        },
        restoreBackgroundColor() {
            document.body.style.backgroundColor = 'green';  
        },
        showAlert() {
            alert('Переход на другую страницу');
        },
        handleFocus() {
            alert('Кнопка в фокусе!');
        },
        menu(){
            alert('Вы вошли в контекстное меню');
        }
    },
});

let headerLogo = document.querySelector('.header');

headerLogo.addEventListener('mouseover', () => {
document.body.style.backgroundColor = 'black';
});

headerLogo.addEventListener('mouseout', () => {
document.body.style.backgroundColor = 'green';
});

let footerLink = document.querySelector('.header__a1');

footerLink.addEventListener('click', () => {
alert('Переход на другую страницу');
});
