import { useLocation } from 'react-router-dom'
import { FooterBar } from './styles'
import { site } from "../data/content"

export function Footer() {
  // The home page ends on an olive section, so the footer blends into it
  // instead of drawing a divider line.
  const { pathname } = useLocation()

  return (
    <FooterBar $seamless={pathname === '/'}>
      {site.name} — {site.addressLines.join(', ')} - <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {site.socialLinks}
      </a>
    </FooterBar>
  )
}
