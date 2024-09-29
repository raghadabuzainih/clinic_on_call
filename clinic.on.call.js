let contactButton = document.getElementById('contactButt')
let nameIn = document.getElementById('name-input').value
let phone = document.getElementById('phone-input').value
let email = document.getElementById('email-input').value
let message = document.getElementById('message-input').value


contactButton.addEventListener('click', ()=>{
    if(nameIn == null){
        alert('Name is required')
    }else if(phone == null){
        alert('Phone is required')
    }else if(email == null){
        alert('Email is required')
    }else if(message == null){
        alert('Message is required')
    }else{
        alert('Thank you for contacting us. We have received your message and will respond to you soon.')
    }
})