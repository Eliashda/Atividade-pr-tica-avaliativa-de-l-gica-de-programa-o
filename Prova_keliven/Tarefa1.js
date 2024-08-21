
const usuarios = [];

function adicionarUsuario(nome, idade, email) {
   
    if (!nome || !idade || !email) {
        console.log("Todos os campos são obrigatórios.");
        return;
    }
    if (idade <= 0) {
        console.log("A idade deve ser maior que 0.");
        return;
    }

    const usuario = {
        nome: nome,
        idade: idade,
        email: email
    };
    
    usuarios.push(usuario);
    console.log("Usuário adicionado com sucesso!");
}

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }
    
    console.log("Lista de Usuários:");
    usuarios.forEach((usuario, index) => {
        console.log(`Usuário ${index + 1}: Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}

adicionarUsuario("Roberto", 17, "Robertao@exemplo.com");
adicionarUsuario("Januaria", 33, "Januaria@exemplo.com");
adicionarUsuario("", 25, "invalido@exemplo.com"); 
adicionarUsuario("Claudovir", 5, "Claudovir@exemplo.com"); 

listarUsuarios(); 
