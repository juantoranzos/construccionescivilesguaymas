import React from 'react'

export const Formulario = () => {
  return (
    <>
    

    <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="col-lg-6 mb-4">
        <h2 class="text-center p-2 font-weight-bold">Formulario de Contacto</h2>
        <hr/>
       
        <form id="form" class="form-control p-2 shadow">
            <div class="field">
                <label for="from_name" class="form-label">Nombre y Apellido</label>
                <input type="text" class="form-control" required/>
            </div>
            <div class="field">
                <label class="form-label">Tu correo</label>
                <input type="text" class="form-control" required/>
            </div>
            <div class="field">
                <label for="mensaje" class="form-label">Mensaje</label>
                <textarea name="mensaje" id="mensaje" class="form-control" required></textarea>
            </div>
            <div class="text-center p-3">
                <input type="submit" id="button" value="Enviar datos" class="btn btn-primary"/>
            </div>
        </form>
    </div>
</div>

    </>
    
   

  )
}
