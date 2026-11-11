import {
  BrandLink,
  HeaderBar,
  Nav,
  NavItem,
  Photo,
  Wordmark,
  WordmarkSub,
} from './styles'

import {
  images,
} from '../data/content'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/order', label: 'Order now', end: true },
  { to: '/menu', label: 'Sample menu', end: true },
]

export function Header() {
  return (
    <HeaderBar>
      <BrandLink to="/" aria-label="Queenstown Social home">
      <Photo style={{ width: '65%', marginTop: '10px' }} src={images.logoLight} alt="The kitchen pass" />
      </BrandLink>
      <Nav aria-label="Site">
        {links.map((link) => (
          <NavItem key={link.to} to={link.to} end={link.end}>
            {link.label}
          </NavItem>
        ))}
      </Nav>
    </HeaderBar>
  )
}
