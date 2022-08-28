import { useState } from "react";
import { helpHttp } from "../helper/helpHttp";
import Swal from "sweetalert2";

export const useContact = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    };


    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    }
    
    const enviando = () => {
        Swal.fire({
            title: 'Enviando Datos...',
            showConfirmButton: false,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.entries(errors).length === 0) {
            enviando()
            setLoading(true);
            helpHttp()
                .post("https://formsubmit.co/ajax/danizabaletaxd@gmail.com", {
                    body: form,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    }
                })
                .then((res) => {
                    setLoading(false);
                    setResponse(true);
                    setForm(initialForm);
                    setTimeout(() => {
                        setResponse(false);
                    },0)
                });
        } else {
            return
        }
    }

    return {
        form, errors, loading, response, handleChange, handleBlur, handleSubmit
    }
} 