const showAccount = document.querySelector('.js-account')

const modal = document.querySelector('.js-modal')

const removeAccount = document.querySelector('.js-close')

const modalBody = document.querySelector('.js-body')



function openAccount(){
    modal.classList.add('open')
}

function closeAccount(){
    modal.classList.remove('open')
}



showAccount.addEventListener('click', openAccount)

removeAccount.addEventListener('click', closeAccount)


