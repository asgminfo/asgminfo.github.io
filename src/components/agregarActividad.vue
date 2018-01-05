<template>
    <div id="agregarActividad">        
        <form v-if="!enviado">
            <h2>Nueva Actividad</h2>
            <label>Nombre:</label>
            <input type="text" v-model.lazy="actividad.nombre" required>
            <label>Descripción:</label>
            <textarea name="" v-model="actividad.descripcion" cols="30" rows="10"></textarea>
            <div id="chkEstado">
                <label for="">Estado: </label>
                <input type="checkbox" id="estado" v-model="actividad.estado">
                <label for="estado" v-if="actividad.estado">Activado</label>
                <label for="estado" v-else-if="actividad.estado == false">Desactivado</label>
            </div>
            <button v-on:click.prevent="post">Agregar</button>
        </form>
        <div v-if="enviado">
          <h3>Actividad Creada correctamente</h3>  
        </div>
        <div id="vistaPrevia">
            <h3>Vista Previa</h3>
            <p>Nombre: {{actividad.nombre}}</p>
            <p>Descripción:</p>
            <p>{{actividad.descripcion}}</p>
            <p v-if="actividad.estado">Estado: Activado</p>
            <p v-else-if="actividad.estado == false">Estado: Desactivado</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                actividad: {
                    nombre: "",
                    descripcion: "",
                    estado: false
                },
                enviado: false
            }
        },
        methods: {
           post: function () {
               this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                   title: this.actividad.nombre,
                   body: this.actividad.descripcion,
                   userId: 1
               }).then(function (data) {
                   console.log(data);
                   this.enviado = true;
                   
               })
           }
        }
    }
</script>

<style>
#agregarActividad *{
    box-sizing: border-box;
}
#agregarActividad{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#vistaPrevia{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#chkEstado input{
    display: inline-block;
    margin-right: 10px;
}
#chkEstado label{
    display: inline-block; 
}
</style>