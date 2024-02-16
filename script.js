    function substituirVogais(valueCrip) {
        const mapKeys = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        
        const cripto = valueCrip.replace(/[aeiou]/g, (vogal) => mapKeys[vogal]);
        
        exibirResultado(cripto);
    }

    
    function voltarVogais(valueCrip) {
        const mapKeys = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };

        const decripto = valueCrip.replace(/ai|enter|imes|ober|ufat/g, (vogal) => mapKeys[vogal]);
        
        exibirResultado(decripto);
    }


function processarTexto(botao) {
    const valueCrip = document.querySelector('.entrada__de__texto__escrever').value.toLowerCase();
    const textOutput = document.querySelector('.vizualizacao__fixa');
    const textInicial = document.querySelector('.saida__de__texto__vizualizar__saida');

    if (valueCrip === '') {
        return alert('Por favor, insira um texto para continuar.');
    } 
    
    if (/[^a-z\s]/.test(valueCrip)) {
        alert('Por favor, insira apenas letras minúsculas e sem acento.');
        return false;
    }

    if (botao === 'criptografar') {
        substituirVogais(valueCrip);
    } else if (botao === 'descriptografar') {
        voltarVogais(valueCrip);
    }

    textInicial.style.display = 'none';
}

function exibirResultado(text) {
    const textOutput = document.querySelector('.vizualizacao__fixa');
    const textInicial = document.querySelector('.saida__de__texto__vizualizar__saida');
    
    textOutput.value = text;
    
    if (text === '') {
        textInicial.style.display = 'flex';
    } else {
        textInicial.style.display = 'none';
    }
}


    const botaoCriptografar = document.querySelector('.botao__criptografar');
    const botaoDescriptografar = document.querySelector('.botao__descriptografar');
    
    botaoCriptografar.addEventListener('click', () => processarTexto('criptografar'));
    botaoDescriptografar.addEventListener('click', () => processarTexto('descriptografar'));

    const botaoCopiar = document.querySelector('.saida__de__texto__vizualizar__copiar');
    botaoCopiar.addEventListener('click', () => {
        const valueCopy = document.querySelector('.vizualizacao__fixa').value;
        navigator.clipboard.writeText(valueCopy)
            .then(() => {
                alert("Texto copiado para a área de transferência!");
                exibirResultado('');
                document.querySelector('.entrada__de__texto__escrever').value = '';
            })
            .catch(() => {
                alert("Erro inesperado ao copiar texto.");
            });
    });

    
