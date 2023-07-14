const age = document.getElementById('age')
const height = document.getElementById('height')
const form = document.getElementById('myform')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let messages = []
    if (age.value == ''||age.value == ''){
        messages.push('Age is required')
    }
    if (messages.length > 0){
        errorElement.innerText = messages.join(', ')
    }
})