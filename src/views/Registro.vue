<template>
    <div>
        <h1>Registro de Condominó</h1>

        <form @submit.prevent="createCondomino({nombre: nombre, telefono: telefono, email: email, direccion: direccion, password: pass1})">
            <input 
                type="text" 
                placeholder="Nombres"
                v-model="nombre"
            >
            <input 
                type="numberPhone" 
                placeholder="Ingrese su celular"
                v-model="telefono"
            >
             <input 
                type="email" 
                placeholder="Ingrese email"
                v-model="email"
            >
            <input 
                type="text" 
                placeholder="Ingrese su direccion"
                v-model="direccion"
            >
            <input 
                type="password" 
                placeholder="Ingrese contraseña"
                v-model="pass1"
            >
            <input 
                type="password" 
                placeholder="Repita contraseña"
                v-model="pass2"
            >
            <button type="submit">Registrar</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Registro',
    data() {
        return {
            tipo: 'Condomino',
            nombre: '',
            telefono: '',
            email: '',
            direccion: '',
            pass1: '',
            pass2: ''
        }
    },
        created() {
            
        },
        methods: {
            ...mapActions(['createCondomino','CondominosDatos'])
        },
        computed:{
            ...mapState(['error'])
        }
}
</script>