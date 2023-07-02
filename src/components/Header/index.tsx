import { HeaderContainer } from './styles'
import logoCoffe from '../../assets/logo-coffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Header() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords

        fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=e28df5931d07b5c901cae276dab88c67`,
        )
          .then((response) => response.json())
          .then((data) => {
            if (data && data.length > 0) {
              const { name, state } = data[0]
              setLocation(`${name}, ${state}`)
            }
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      })
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  return (
    <HeaderContainer>
      <NavLink to="/" title="Início">
        <img src={logoCoffe} alt="" />
      </NavLink>

      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          {location} {/* TODO: Buscar localização do usuário */}
        </div>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          <div>3</div>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
