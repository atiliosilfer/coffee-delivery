import ExpressoTradicionalImage from '../../assets/coffees/expresso-tradicional.png'
import ExpressoAmericanoImage from '../../assets/coffees/expresso-americano.png'
import ExpressoCremosoImage from '../../assets/coffees/expresso-cremoso.png'
import ExpressoGeladoImage from '../../assets/coffees/expresso-gelado.png'
import CafeComLeiteImage from '../../assets/coffees/cafe-com-leite.png'
import LatteImage from '../../assets/coffees/latte.png'
import CapuccinoImage from '../../assets/coffees/capuccino.png'
import MacchiatoImage from '../../assets/coffees/macchiato.png'
import MocaccinoImage from '../../assets/coffees/mocaccino.png'
import ChocolateQuenteImage from '../../assets/coffees/chocolate-quente.png'
import CubanoImage from '../../assets/coffees/cubano.png'
import HavaianoImage from '../../assets/coffees/havaiano.png'
import ArabeImage from '../../assets/coffees/arabe.png'
import IrlandesImage from '../../assets/coffees/irlandes.png'

export type CoffeeMenuItemType = {
  id: number
  image: string
  type: string[]
  name: string
  description: string
  value: number
}

export const coffeeMenu: CoffeeMenuItemType[] = [
  {
    id: 0,
    image: ExpressoTradicionalImage,
    type: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
  },
  {
    id: 1,
    image: ExpressoAmericanoImage,
    type: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
  },
  {
    id: 2,
    image: ExpressoCremosoImage,
    type: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
  },
  {
    id: 3,
    image: ExpressoGeladoImage,
    type: ['tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
  },
  {
    id: 4,
    image: CafeComLeiteImage,
    type: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
  },
  {
    id: 5,
    image: LatteImage,
    type: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
  },
  {
    id: 6,
    image: CapuccinoImage,
    type: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
  },
  {
    id: 7,
    image: MacchiatoImage,
    type: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
  },
  {
    id: 8,
    image: MocaccinoImage,
    type: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
  },
  {
    id: 9,
    image: ChocolateQuenteImage,
    type: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
  },
  {
    id: 10,
    image: CubanoImage,
    type: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
  },
  {
    id: 11,
    image: HavaianoImage,
    type: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
  },
  {
    id: 12,
    image: ArabeImage,
    type: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
  },
  {
    id: 13,
    image: IrlandesImage,
    type: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
  },
]
