const btnAbrirModal = 
document.querySelectorAll('[class^="btn-abrir-modal-"]');
const btnCerrarModal =
document.querySelectorAll('[class^="btn-cerrar-modal-"]');
const modales =
document.querySelectorAll('[class^="modal-"]');

//btnAbrirModal.addEventListener("click",()=> {
//    modal.showModal();
//})

//btnCerrarModal.addEventListener("click",()=> {
//    modal.close();
//})

btnAbrirModal.forEach(function(abrir,index) {
    abrir.addEventListener('click', function() {
        const modal = modales[index];
        if (modal && typeof modal.showModal === 'function') {
            modal.showModal();
        } 
    });
});

btnCerrarModal.forEach(function(cerrar,index) {
    cerrar.addEventListener('click', function() {
        const modal = modales[index];
        if (modal && typeof modal.close === 'function') {
            modal.close();
        }
    });
});