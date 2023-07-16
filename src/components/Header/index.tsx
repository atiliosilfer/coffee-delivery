import { HeaderContainer } from './styles'
import logoCoffe from '../../assets/logo-coffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const [location, setLocation] = useState('Perdigão, MG')

  const { cartItens } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Início">
        <img src={logoCoffe} alt="" />
      </NavLink>

      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          {location}
        </div>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          {cartItens.length > 0 && <div>{cartItens.length}</div>}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
