let arregloTareas = [];
const btnAgregarTarea = document.querySelector('.agregar__accion');
let txtTarea = document.querySelector('.agregar__tarea');

const agregarTarea = (tarea) => {
    arregloTareas.push(tarea);
    txtTarea.value = '';
    txtTarea.focus();
    listarTareas();
}

const listarTareas = () => {
    let contenedorTareas = document.querySelector('.todolist__listado');
    contenedorTareas.innerHTML = '';
    arregloTareas.forEach(tarea => {
        let divtarea = document.createElement('div');
        divtarea.classList.add('tarea');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('tarea__completada');
        divtarea.append(checkbox);
        let descripciontarea = document.createElement('p');
        descripciontarea.textContent = tarea.descripcion;
        descripciontarea.classList.add('tarea__descripcion');
        divtarea.append(descripciontarea);
        let buttoneliminar = document.createElement('button');
        buttoneliminar.classList.add('tarea__eliminar');
        let iconoeliminar = document.createElement('i');
        iconoeliminar.classList.add('fas','fa-trash');
        buttoneliminar.appendChild(iconoeliminar);
        divtarea.append(buttoneliminar);
        contenedorTareas.appendChild(divtarea);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    listarTareas();
});

btnAgregarTarea.addEventListener('click', () => {
    const Tarea = {
        id: 1,
        descripcion: txtTarea.value,
        completado: false
    }
    agregarTarea(Tarea);
});