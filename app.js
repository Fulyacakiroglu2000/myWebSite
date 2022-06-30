const ff_icon = document.querySelector('#nav_bar .nav-bar .nav-list .ff');
const nav_list = document.querySelector('#nav_bar .nav-bar .nav-list');

ff_icon.addEventListener('click', () => {
    nav_list.classList.toggle('open');
    ff_icon.classList.toggle('active');

})