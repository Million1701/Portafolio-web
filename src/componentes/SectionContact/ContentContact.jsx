import React from 'react'
import "./Contact.css"
import { useContact } from '../../hooks/useContact'
import Swal from 'sweetalert2'

const initialForm = {
    nombre: "",
    apellido: "",
    email: "",
    subject: "",
    comments: "",
}

const validationsForm = (form) => {
    let errors = {};

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexLastName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.nombre.trim()) {
        errors.nombre = 'El campo "Nombre" es requerido'
    } else if (!regexName.test(form.nombre.trim())) {
        errors.nombre = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }

    if (!form.apellido.trim()) {
        errors.apellido = 'El campo "Apellido" es requerido'
    } else if (!regexLastName.test(form.apellido.trim())) {
        errors.apellido = "El campo 'Apellido' sólo acepta letras y espacios en blanco";
    }

    if (!form.email.trim()) {
        errors.email = 'El campo "Email" es requerido'
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "El campo 'Email' es incorrecto";
    }

    if (!form.subject.trim()) {
        errors.subject = 'El campo "Asunto a tratar" es requerido'
    }

    if (!form.comments.trim()) {
        errors.comments = 'El campo "Comentarios" es requerido'
    } else if (!regexComments.test(form.comments.trim())) {
        errors.comments =
            "El campo 'Comentarios' no debe exceder los 255 caracteres";
    }

    return errors;
}

const MostrarAlert = () => {
    Swal.fire({
        icon:"success", 
        title: 'Datos enviados',
        showConfirmButton: true,
    })
}

const ContentContact = () => {
    const {
        form,
        errors,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useContact(initialForm, validationsForm)

    const stylesError = {
        border:"none",
        backgroundColor:"rgba(189, 33, 33,0.5)"
    }


    return (
    <div className='content-form'>
        <br />
        <form onSubmit={handleSubmit}>
            <div className='content-input'>
            <h4>Nombres</h4>
            {errors.nombre && <span style={{padding:"10px",color:"#fff"}}>{errors.nombre}</span>}
            <input 
            name="nombre" 
            type="text" 
            placeholder='Introduce tus nombres'
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.nombre}
            required
            style={errors.nombre && stylesError}
            />
            </div>
            <div className='content-input'>
            <h4>Apellidos</h4>
            {errors.apellido && <span style={{padding:"10px",color:"#fff"}}>{errors.apellido}</span>}
            <input 
            name="apellido" 
            type="text" 
            placeholder='Introduce tus apellidos'
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.apellido}
            required
            style={errors.apellido && stylesError}
            />
            </div>
            <div className='content-input'>
            <h4>Email</h4>
            {errors.email && <span style={{padding:"10px",color:"#fff"}}>{errors.email}</span>}
            <input 
            name="email" 
            type="email" 
            placeholder='Introduce tu email'
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
            style={errors.email && stylesError}
            />
            </div>
            <div className='content-input'>
            <h4>Asunto</h4>
            {errors.subject && <span style={{padding:"10px",color:"#fff"}}>{errors.subject}</span>}
            <input 
            name='subject' 
            type="text" 
            placeholder='Introduce tu asunto'
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
            style={errors.subject && stylesError}
            />
            </div>
            <div className='content-input'>
            <h4>Comentario</h4>
            {errors.comments && <span style={{padding:"10px",color:"#fff"}}>{errors.comments}</span>}
            <textarea 
            name="comments" 
            cols="80" 
            rows="10"
            placeholder='Hazme un comentario'
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
            style={errors.comments && stylesError}
            ></textarea>
            </div>
            <input type="submit" name="submit" value="Enviar"/>
        </form>
        {response && MostrarAlert()}
    </div>
  )
}

export default ContentContact