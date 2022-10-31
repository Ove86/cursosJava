import { Testimonial } from "../models/testimoniales.js";

const guardarTestimonial = async (req,res) => {
    // Validar form
    const {nombre,correo,mensaje} = req.body;
    const errores=[];

    if (nombre.trim()===''){
        errores.push({mensaje:'El nombre está vacio.'});
    }
    if (correo.trim()===''){
        errores.push({mensaje:'El correo electrónico está vacio.'});
    }
    if (mensaje.trim()===''){
        errores.push({mensaje:'El mensaje está vacio.'});
    }
    if (errores.length>0){
        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar vista con errores
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //Almacenar en base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales')   
        } catch (error) {
            console.log(error)
        }
    }
}


export {
    guardarTestimonial
}