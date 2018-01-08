<template>
  <div class="app-layout">
    <custom-nav></custom-nav>
    <banner></banner>
    <about></about>
    <projects></projects>
    </div>
  </div>
  </div>
</template>

<script>
  // import About from './About.vue'
  import CustomNav from './CustomNav.vue'
  import Banner from './Banner.vue'
  import About from './About.vue'
  import Projects from './Projects.vue'
  export default {
    components: {
      About,
      CustomNav,
      Banner,
      Projects
    }
  }

</script>
<style>
.app-layout{
  background-color: #4f5b62;
}
.main-text{
  color: rgba(255, 255, 255, 0.95)
  /* margin-bottom: 2em; */
}
.sub-text{
  color: rgba(255, 255, 255, 0.72)
}
</style>
