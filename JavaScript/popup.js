const OpenModalButtons= document.querySelectorAll('[data-modales-target]')
const closeModalButtons= document.querySelectorAll('[data-cerrar-button]')
const overlay= document.getElementById('overlay') 


OpenModalButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalesTarget)
        openModal(modal)
    })
}) 

closeModalButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal = button.closest('.modales')
        closeModal(modal)
    })
})

const openModal= (modal)=>{
    if (modal == null) return 
    modal.classList.add('active')
    overlay.classList.add('active')

} 

const closeModal= (modal)=>{
    if (modal== null) return 
    modal.classList.remove('active')
    overlay.classList.remove('active')

} 


overlay.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.modales.active')
    modals.forEach(modal=>{
      closeModal(modal)
    })
})