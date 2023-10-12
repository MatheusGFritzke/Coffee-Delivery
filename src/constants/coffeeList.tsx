export function mountImagesProps(images: string[]) {
  const coffeeList = [
    {
      id: '1',
      image: images[0],
      types: ['Tradicional'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9.90',
    },
    {
      id: '2',
      image: images[1],
      types: ['Tradicional'],
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9.90',
    },
    {
      id: '3',
      image: images[2],
      types: ['Tradicional'],
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: '9.90',
    },
    {
      id: '4',
      image: images[3],
      types: ['Tradicional', 'Gelado'],
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: '9.90',
    },
    {
      id: '5',
      image: images[4],
      types: ['Tradicional', 'Com leite'],
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: '9.90',
    },
    {
      id: '6',
      image: images[5],
      types: ['Tradicional', 'Com leite'],
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: '9.90',
    },
    {
      id: '7',
      image: images[6],
      types: ['Tradicional', 'Com leite'],
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: '9.90',
    },
    {
      id: '8',
      image: images[7],
      types: ['Tradicional', 'Com leite'],
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: '9.90',
    },
    {
      id: '9',
      image: images[8],
      types: ['Tradicional', 'Com leite'],
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: '9.90',
    },
    {
      id: '10',
      image: images[9],
      types: ['Especial', 'Com leite'],
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: '9.90',
    },
    {
      id: '11',
      image: images[10],
      types: ['Especial', 'Alcólico', 'Gelado'],
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: '9.90',
    },
    {
      id: '12',
      image: images[11],
      types: ['Especial'],
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: '9.90',
    },
    {
      id: '13',
      image: images[12],
      types: ['Especial'],
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: '9.90',
    },
    {
      id: '14',
      image: images[13],
      types: ['Especial', 'Alcólico'],
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: '9.90',
    },
  ]
  return coffeeList
}
