<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>  
import agregarActividad from './components/actividad/agregarActividad'
import verActividades from './components/actividad/verActividades'
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
