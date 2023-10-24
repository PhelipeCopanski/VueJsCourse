import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './Components/Inicio'
import Menu from './Components/template/Menu'
import MenuAlt from './Components/template/MenuAlt'
// import Usuario from './Components/Usuarios/Usuario'
// import UsuarioLista from './Components/Usuarios/UsuarioLista'
// import UsuarioDetalhe from './Components/Usuarios/UsuarioDetalhe'
// import UsuarioEditar from './Components/Usuarios/UsuarioEditar'

const Usuario = () => import(/* webpackChunkName: "usuario" */'./Components/Usuarios/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./Components/Usuarios/UsuarioLista')
const UsuarioDetalhe = () => import('./Components/Usuarios/UsuarioDetalhe')
const UsuarioEditar = () => import('./Components/Usuarios/UsuarioEditar')

Vue.use(Router)

const router = new Router ({
    mode: 'history',
    scrollBehavior(to) {
        if (to.hash) {
            return { selector: to.hash }
        }
    },
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    },
    {
        path: '/usuarios',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'usuarioEditar' }
        ]
    }, {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    next();
})

export default router;