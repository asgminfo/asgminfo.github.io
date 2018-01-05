<template>
  <div id="verActividades">
    <h1>Lista de actividades</h1>
    <input type="text" v-model="buscar" placeholder="Buscar Actividad...">
    <div v-for="actividad in buscarActividad" class="actividad">
      <router-link v-bind:to="'/actividad/' + actividad.id"><h2>{{ actividad.title | to-uppercase }}</h2></router-link>
      <h3>{{ actividad.body | snippet }}</h3>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      actividades: [],
      buscar: ''
    }
  },  
  //estado cuando se crea la app
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
        console.log(data);        
        this.actividades = data.body.slice(0, 10)
    })
  },
  computed: {
        buscarActividad: function () {
          return this.actividades.filter((actividad) => {
            return actividad.title.match(this.buscar)
          })
        }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase()
    },
    snippet(value) {
      return value.slice(0, 100) + "..."
    }
  }
}
</script>

<style>
  
  #verActividades{
    max-width: 800px;
    margin: 0 auto;
  }
  .actividad{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>

