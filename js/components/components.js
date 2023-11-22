Vue.component('aboutUs', {
  template:`
    <div align="center">
      <h2> О нас:</h2>
      <aboutUs__text></aboutUs__text>
    </div>`
});

Vue.component('aboutUs__text',{

});

new Vue({
  el:'#component',
  template: '<aboutUs><aboutUs>'
});
