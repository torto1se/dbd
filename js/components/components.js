Vue.component('aboutUs', {
  template:`
    <div class="main__center main__center_settings">
      <h2> 
        Об игре:
      </h2>
      <aboutUs__text></aboutUs__text>
    </div>`
});

Vue.component('aboutUs__text',{
  template:`
    <h3 class="main__h3" style="padding-top:30px;"> 
      Dead by Daylight — асимметричная многопользовательская<br> компьютерная игра в жанре survival horror с видом от первого и третьего лица,<br> разработанная канадской студией Behaviour Interactive и впервые выпущенная для Windows в 2016 году.
    </h3>`
});

new Vue({
  el:'#component',
  template: `<aboutUs></aboutUs>`
});
