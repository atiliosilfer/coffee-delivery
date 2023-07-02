import { HeaderContainer } from './styles'
import logoCoffe from '../../assets/logo-coffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
  const [location, setLocation] = useState('Perdigão, MG')

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
          <div>3</div>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
