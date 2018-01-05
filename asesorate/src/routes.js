import verActividades from './components/respActividad/verActividades.vue'
import agregarActividad from './components/respActividad/agregarActividad.vue'
import actividad from './components/respActividad/actividad.vue'

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