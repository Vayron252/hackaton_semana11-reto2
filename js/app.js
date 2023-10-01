let arregloTareas = [], generadorID = 0;
const btnAgregarTarea = document.querySelector('.agregar__accion');
let txtTarea = document.querySelector('.agregar__tarea');
let contenedorTareas = document.querySelector('.todolist__listado');

const agregarTarea = (tarea) => {
    arregloTareas.push(tarea);
    let divtarea = crearTarjetaTarea(tarea);
    contenedorTareas.appendChild(divtarea);
    txtTarea.value = '';
    txtTarea.focus();
}

const crearTarjetaTarea = (tarea) => {
    let divtarea = document.createElement('div');
    divtarea.classList.add('tarea');
    divtarea.setAttribute('data', tarea.id);
    let descripciontarea = document.createElement('p');
    descripciontarea.textContent = tarea.descripcion;
    descripciontarea.classList.add('tarea__descripcion');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('tarea__completada');
    if (tarea.completado) {
        checkbox.checked = true;
        descripciontarea.classList.add('tarea__descripcion--completado');
    }
    divtarea.append(checkbox);
    divtarea.append(descripciontarea);
    let buttoneliminar = document.createElement('button');
    buttoneliminar.classList.add('tarea__eliminar');
    let iconoeliminar = document.createElement('i');
    iconoeliminar.classList.add('fas','fa-trash');
    buttoneliminar.appendChild(iconoeliminar);
    divtarea.append(buttoneliminar);
    return divtarea;
}

const listarTareas = () => {
    contenedorTareas.innerHTML = '';
    arregloTareas.forEach(tarea => {
        let divtarea = crearTarjetaTarea(tarea);
        contenedorTareas.appendChild(divtarea);
    });
}

const eliminarTarea = (id) => {
    arregloTareas = arregloTareas.filter((tarea) => tarea.id != id);
    listarTareas();
}

window.addEventListener('DOMContentLoaded', () => {
    listarTareas();
});

contenedorTareas.addEventListener('click', (e) => {
    let valorID;
    if (e.target.type == 'checkbox') {
        valorID = e.target.parentNode.getAttribute('data');
        const tareaSeleccionada = arregloTareas.find((tarea) => tarea.id == valorID);
        const posicionTarea = arregloTareas.findIndex((tarea) => tarea.id == valorID);
        if (e.target.checked) {
            tareaSeleccionada.completado = true;
        } else {
            tareaSeleccionada.completado = false;
        }
        arregloTareas[posicionTarea] = tareaSeleccionada;
        e.target.parentNode.children[1].classList.toggle('tarea__descripcion--completado');
    }
    if (e.target.nodeName == 'BUTTON' || e.target.nodeName == 'I') {
        if (e.target.nodeName == 'BUTTON') {
            valorID = e.target.parentNode.getAttribute('data');
        }
        if (e.target.nodeName == 'I') {
            valorID = e.target.parentNode.parentNode.getAttribute('data');
        }
        eliminarTarea(valorID);
    }
});

btnAgregarTarea.addEventListener('click', () => {
    let descripcionTarea = txtTarea.value;
    if (descripcionTarea == '') {
        alert('El campo descripción no puede estar vacío.!!!');
        txtTarea.value = '';
        txtTarea.focus();
        return;
    }
    generadorID += 1;
    const Tarea = {
        id: generadorID,
        descripcion: descripcionTarea,
        completado: false
    }
    agregarTarea(Tarea);
});