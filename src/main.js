import Vue from 'vue'
import App from './App.vue'
import InitRouter from './router'
import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
