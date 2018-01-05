import verActividades from './components/verActividades.vue'
import agregarActividad from './components/agregarActividad.vue'
import actividad from './components/actividad.vue'

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