const {getShoppingCart} = require("./filter");
const {products} = require("./data/products.json")

const exemplo1 = {
    products: [
      {
        name: 'DISNEY CRUELLA© T-SHIRT',
        category: 'T-SHIRTS'
      },
      {
        name: 'KNIT JOGGING PANTS',
        category: 'PANTS'
      },
      {
        name: 'ASYMMETRICAL LEATHER SLIDE HEELS',
        category: 'SHOES'
      },
      {
        name: 'SOFT FLAP BACKPACK',
        category: 'BAGS'
      }
    ],
    promotion: 'FULL LOOK',
    totalPrice: 404.96,
    discountValue: 75.00,
    discountPercentage: '15.63%'
}

const exemplo2 = {
    products: [
		{
            name: 'RUBBERIZED PRINTED T-SHIRT',
            category: 'T-SHIRTS'
        },
		{
            name: 'CONTRAST SLOGAN T-SHIRT',
            category: 'T-SHIRTS'
        },
		{
            name: 'KNIT JOGGING PANTS',
            category: 'PANTS'
        },
		{
            name: 'MENSWEAR PANTS',
            category: 'PANTS'
        }
	],
    promotion: 'DOUBLE LOOK',
	totalPrice: '504.95',
	discountValue: '25.00',
	discount: '4.72%'
}

const exemplo3 = {
    products: [
        {
            name: 'PINK PANTHER™ T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'DISNEY CRUELLA© T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'RUBBERIZED PRINTED T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'CONTRAST SLOGAN T-SHIRT',
            category: 'T-SHIRTS'
        }
    ],
    promotion: 'SINGLE LOOK',
    totalPrice: '524.96',
    discountValue: '10.00',
    discount: '1.87%'
}

const exemplo4 = {
    products: [
        {
            name: 'PINK PANTHER™ T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'RUBBERIZED PRINTED T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'CONTRAST SLOGAN T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'KNIT JOGGING PANTS',
            category: 'PANTS'
        },
        {
            name: 'ASYMMETRICAL LEATHER SLIDE HEELS',
            category: 'SHOES'
        },
        {
            name: 'SLINGBACK KITTEN HEEL SHOES WITH METAL DETAIL',
            category: 'SHOES'
        }
    ],
    promotion: 'TRIPLE LOOK',
    totalPrice: '784.94',
    discountValue: '130.00',
    discount: '14.21%'
}


describe ("Filter", () => {
    describe ("Propriedades", () => {
        it ("Deve retornar o carrinho de compras do exemplo 1",() => {
            const response = getShoppingCart([120, 230, 310, 490], products);
            expect(response).toEqual(exemplo1);
        })
        it ("Deve retornar o carrinho de compras do exemplo 2",() => {
            const response = getShoppingCart([130, 140, 230, 260], products);
            expect(response).toEqual(exemplo2);
        })
        it ("Deve retornar o carrinho de compras do exemplo 3",() => {
            const response = getShoppingCart([110, 120, 130, 140], products);
            expect(response).toEqual(exemplo3);
        })
        it ("Deve retornar o carrinho de compras do exemplo 4",() => {
            const response = getShoppingCart([110, 130, 140, 230, 310, 330], products);
            expect(response).toEqual(exemplo4);
        })
    })
})