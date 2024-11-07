document.querySelector('.botao-adicionar').addEventListener('click', addProdutos);
document.querySelector('.botao-limpar').addEventListener('click', limpar);

function addProdutos() {
    const produtos = document.getElementById('produto').value;
    const qtdProdutos = document.getElementById('quantidade').value;

    const [product, price] = produtos.split(' - R$');
    const priceNumber = parseFloat(price);

    if (isNaN(priceNumber)) {
        alert("Preço inválido");
        return;
    }

    const carrinho = `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${qtdProdutos}x</span> ${product} <span class="texto-azul">R$${(priceNumber * qtdProdutos).toFixed(2).replace('.', ',')}</span>
        </section>
    `;

    document.getElementById('lista-produtos').innerHTML += carrinho;

    somaValor(priceNumber * qtdProdutos);
}

function somaValor(valor) {
    const totalElement = document.getElementById('valor-total');
    const totalAtual = parseFloat(totalElement.innerText.replace('R$', '').replace(',', '.'));
    
    // Verificando se o valor atual é um número válido
    if (isNaN(totalAtual)) {
        totalElement.innerText = "R$0,00"; 
    }

    const novoTotal = totalAtual + valor;
    totalElement.innerText = `R$${novoTotal.toFixed(2).replace('.', ',')}`;
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0,00'; // Reseta o total para zero
}
