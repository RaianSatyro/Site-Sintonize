function login(){
    let campoUser = document.getElementById('user')
    let campoSenha = document.getElementById('pass')
    let campoEsqueceuSenha = document.getElementById('senhaErrada')

    let user = campoUser.value
    let senha = campoSenha.value

    
    if (user === 'artista.sintonize@login.com' && senha === '123qwe..'){
        return window.location.href = '../login-google.html'
    }else{
       campoEsqueceuSenha.innerHTML = "Login ou senha incorretas!" 
    }
}