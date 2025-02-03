const body = document.body;
const sitediv = document.getElementById("site");
let titulo="my site"
document.title= titulo

let setnanotextinho = null;
const version = "1.0";
let pagename = document.title;
let setcordefundo = "";

function alertar(mensagem) {
    alert(mensagem);
}

function Vtex(texto) {
    const p = document.createElement("p");
    p.innerText = texto;
    document.body.appendChild(p);
}

function vtexlog(texto) {
    console.log(texto);
}

// ---- SISTEMA DE INTERFACE ------

function criarButao(textButton, id, baccor, texcor, pe) {
    const button = document.createElement("button");
    button.textContent = textButton;
    button.id = id;
    button.style.backgroundColor = baccor;
    button.style.color = texcor;
    button.style.padding = pe + "px";
    body.appendChild(button);
}

function removerElemento(id) {
    const elemento = document.getElementById(id);
    if (elemento) elemento.remove();
    else console.error("🥲 EU NÃO CONSEGUIR ACHAR O ELEMENTO");
}

function criarImagem(container, id, url, largura, altura) {
    const elementoContainer = document.querySelector(container);
    if (elementoContainer) {
        console.error("🙃 não conseguir achar o contêiner");
        return;
    }
}

function redirecionar(url) {
    window.location.href = url;
}

function code(texto) {
    const code = document.createElement("code");
    code.innerText = texto;
    document.body.appendChild(code);
}

function criartitulo(texto) {
    const h1 = document.createElement("h1");
    h1.innerText = texto;
    document.body.appendChild(h1);
}

function criarsessao(texto) {
    const p = document.createElement("p");
    p.innerHTML = texto;
    document.body.appendChild(p);
}

function tocarAudio(url) {
    const audio = new Audio(url);
    audio.play();
}

//---- categoria utilitários-----

function nanotextinho() {
    console.log("😊 bom trabalho");
}
nanotextinho();

function ePrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// ---- NOVAS FUNÇÕES ADICIONADAS ----

// Formatação de Moeda (Real Brasileiro)
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

// Validação de CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;
    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;
    return digito1 === parseInt(cpf.charAt(9)) && digito2 === parseInt(cpf.charAt(10));
}

// Máscara de Telefone
function mascaraTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    if (telefone.length === 11) {
        return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (telefone.length === 10) {
        return telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return telefone;
}

// Gerador de Senhas
function gerarSenha(tamanho = 8) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}

// Conversor de Temperatura
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Copiar Texto para a Área de Transferência
function copiartext(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}
function Media(numeros) {
    if (numeros.length === 0) return 0;     let soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

// Exemplo de uso

function rolarAteElemento(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Elemento não encontrado');
    }
}

function codigoQuePodeFalhar() {
    const obj = undefined;
    console.log(obj.propriedade); 
}

function executarComSeguranca(funcao) {
    try {
        funcao();
    } catch (erro) {
console.error(" 🙃 o código contém um erro")
console.log("🤓você consegue resolver!")
    } finally {
    }
}

executarComSeguranca(codigoQuePodeFalhar);
