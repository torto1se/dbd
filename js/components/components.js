Vue.component('aboutUs', {
  template:`
    <div align="center">
      <h2> Об игре:</h2>
      <aboutUs__text></aboutUs__text>
    </div>`
});

Vue.component('aboutUs__text',{
   <div class="main__center main__center_settings">
            <h3 class="main__h3"> Dead by Daylight — асимметричная многопользовательская<br> компьютерная игра в жанре survival horror с видом от первого и третьего лица,<br> разработанная канадской студией Behaviour Interactive и впервые выпущенная для Windows в 2016 году. Кнопка была нажата {{ counter }} раз</h3>
            <button v-on:click="clickers" @focus="handleFocus">+1</button>
        </div>
});

new Vue({
  el:'#component',
  template: '<aboutUs><aboutUs>'
});
