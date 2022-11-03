import mongoose from "mongoose";

const veterinarioSchema = mongoose.Schema({
    nombre: {
        type: String, 
        required: true, // requiere que el campo esté lleno
        trim: true // quita los espacios sobrantes cuando escribe el usuario
    },
    password:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // no pueden haber dos emails iguales
        trim: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null
    },
    token:{
        type: String,

    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

const Veterinario = mongoose.model("Veterinario", veterinarioSchema);

export default Veterinario;