import { HomeHeader } from './components/HomeHeader'
import { CoffeeMenuTitle, ContainerCoffeeMenu } from './styles'
import { CoffeeMenuItem } from './components/CoffeeMenuItem'
import { coffeeMenu } from '../../service/mocks/coffeMenu'

export function Home() {
  return (
    <>
      <HomeHeader />

      <CoffeeMenuTitle>Nossos cafés</CoffeeMenuTitle>
      <ContainerCoffeeMenu>
        {coffeeMenu.map((menu) => (
          <CoffeeMenuItem key={menu.id} menu={menu} />
        ))}
      </ContainerCoffeeMenu>
    </>
  )
}
