<template>
  <nav class="navbar sticky-top justify-content-end">
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
    </ul>
</nav>
</template>
<script>
  import * as routes from '../routes'

  export default {
    name: 'Nav',
    // methods: {
    //   goToDashboard () {
    //     this.$router.push({
    //       name: routes.DASHBOARD
    //     })
    //   },
    //   goToSettings () {
    //     this.$router.push({
    //       name: routes.SETTINGS
    //     })
    //   }
    // }
  }
</script>

<style>
.navbar {
  margin-bottom: 0px;
  background-color: #000a12;
}
a{
  color: #fff;
}
a:hover{
  color: #69e2ff;
}
</style>
