<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>  
import agregarActividad from './components/agregarActividad'
import verActividades from './components/verActividades'
import header from './components/header'

export default {
  components: {
        'agregarActividad': agregarActividad,
        'verActividades' : verActividades,
        'app-header' : header
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
