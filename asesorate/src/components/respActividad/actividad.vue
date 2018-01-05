<template>
  <div id="actividad">
    <h1>{{ actividad.title }}</h1>
    <article>{{ actividad.body }}</article>
  </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id,
            actividad: {}
        }
    },
    created () {
        this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
            .then(function (data) {
                this.actividad = data.body
            })
    }
}
</script>
<style>
#actividad {
  max-width: 800px;
  margin: 0 auto;
}
</style>
