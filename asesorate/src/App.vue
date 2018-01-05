<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>  
import agregarActividad from './components/respActividad/agregarActividad'
import verActividades from './components/respActividad/verActividades'
import header from './components/template/header'

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
