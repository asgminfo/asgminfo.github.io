import verActividades from './components/actividad/verActividades.vue'
import agregarActividad from './components/actividad/agregarActividad.vue'
import actividad from './components/actividad/actividad.vue'

export default[
    {
        path: '/',
        component: verActividades
    },
    {
        path: '/agregarActividad',
        component: agregarActividad
    },
    {
        path: '/actividad/:id',
        component: actividad
    }
]