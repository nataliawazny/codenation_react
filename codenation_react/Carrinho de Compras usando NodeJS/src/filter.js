const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function promocaoAplicada(lista) {
	return lista.reduce((categorias, produto) => {
		if (!categorias.includes(produto.category)) {
			categorias.push(produto.category);
		}
		return categorias
	}, [])
}

function getprecoRegular(lista) {
	const precoRegular = lista
		.map(produto => produto.regularPrice)
		.reduce((valorAcumulador, valorArray) => valorAcumulador + valorArray, 0)
		.toFixed(2)

	return precoRegular
}

function getprecoTotal(lista, categoriapromocaoAplicada) {
	const precoPromocional = []
	lista.forEach((produto, indexproduto) => {
		const promocoes = produto.promotions;
		const semDesconto = produto.regularPrice;
		promocoes.forEach(promocaoAplicada => {
			if (promocaoAplicada.looks.includes(categoriapromocaoAplicada)) {
				precoPromocional.push(promocaoAplicada.price);
			}
		})
		if (!precoPromocional[indexproduto]) {
			precoPromocional.push(semDesconto);
		}
	})

	return precoPromocional.reduce((valorAcumulador, valorArray) => valorAcumulador + valorArray, 0).toFixed(2)
}

function getShoppingCart(ids, productsList) {
	const lista = productsList.filter(produto => ids.includes(produto.id))
	const nomeCategoria = lista.map(produto => ({ name: produto.name, category: produto.category }))
	const tipopromocaoAplicada = promotions[promocaoAplicada(lista).length - 1];
	const precoRegular = getprecoRegular(lista);
	const precoTotal = getprecoTotal(lista, tipopromocaoAplicada);
	const valorDesconto = (precoRegular - precoTotal).toFixed(2);
	const porcentagemDesconto = (100 - (100 * precoTotal) / precoRegular).toFixed(2);

	const carrinho = {
		'products': nomeCategoria,
		'promotion': tipopromocaoAplicada,
		'totalPrice': precoTotal,
		'discountValue': valorDesconto,
		'discount': `${porcentagemDesconto}%`
	}

	return carrinho;
}

module.exports = { getShoppingCart };