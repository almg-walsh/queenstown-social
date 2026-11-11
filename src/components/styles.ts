import styled, { createGlobalStyle } from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.cream};
    color: ${({ theme }) => theme.colors.ink};
    font-family: ${({ theme }) => theme.fonts.sans};
    -webkit-font-smoothing: antialiased;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
  }
`

export const Page = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`

export const HeaderBar = styled.header`
width: 100%;
  padding-bottom: 20px;
  background: ${({ theme }) => theme.colors.olive};
  // padding: 28px 20px 20px;
  text-align: center;

  @media (min-width: 768px) {
    // padding: 40px 24px 24px;
  }
`

export const BrandLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.olive};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`

export const Wordmark = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3.4rem, 12vw, 5.6rem);
  line-height: 0.85;
  font-weight: 400;
`

export const WordmarkSub = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.72rem;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.olive};
  margin-top: 4px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px 28px;
  margin-top: 22px;
`

export const NavItem = styled(NavLink)`
  font-size: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.cream};
  padding: 4px 0;
  border-bottom: 2px solid transparent;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.paper};
    border-bottom-color: ${({ theme }) => theme.colors.accent};
  }
`

export const Main = styled.main`
  flex: 1;
`

export const Hero = styled.img`
  width: 100%;
  height: min(72vh, 720px);
  object-fit: cover;
`

type Tone = 'navy' | 'olive' | 'cream'

export const Section = styled.section<{ $tone?: Tone }>`
  padding: 56px 20px;
  background: ${({ theme, $tone = 'cream' }) =>
    $tone === 'navy' ? theme.colors.ink : $tone === 'olive' ? theme.colors.olive : 'transparent'};
  color: ${({ theme, $tone = 'cream' }) =>
    $tone === 'cream' ? theme.colors.ink : theme.colors.cream};

  @media (min-width: 768px) {
    padding: 96px 40px;
  }
`

export const AboutGrid = styled.div`
  display: grid;
  gap: 28px;
  max-width: 1120px;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr minmax(240px, 360px);
    gap: 40px;
  }
`

export const Photo = styled.img`
  width: '500px';
  object-fit: cover;
`

export const CopyBlock = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1rem;
  line-height: 1.7;
  max-width: 760px;
  margin: 0 auto;

  p {
    margin: 0 0 1.1em;
  }

`

export const Notes = styled.div`
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1rem;
  line-height: 1.7;

  p {
    margin: 0 0 1em;
  }
`

export const CenterActions = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0 28px 0;
`

export const WidePhoto = styled.img`
  width: 100%;
  height: min(52vh, 520px);
  object-fit: cover;
`

export const Split = styled.div`
  display: grid;
  gap: 36px;
  max-width: 960px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
  }
`

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3.2rem);
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 0 0 20px;
  text-align: center;
`

export const Body = styled.p`
  margin: 0 0 0.9em;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1rem;
  line-height: 1.7;
`

export const MailLink = styled.a`
  color: inherit;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.accent};
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
`

export const SupplierList = styled.div`
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1rem;
  line-height: 1.65;

  h3 {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 700;
    color: inherit;
    opacity: 0.75;
    margin: 28px 0 8px;
  }

  p {
    margin: 0 0 4px;
  }
`

export const FooterBar = styled.footer<{ $seamless?: boolean }>`
  padding: 40px 20px 56px;
  text-align: center;
  background: ${({ theme }) => theme.colors.olive};
  color: ${({ theme }) => theme.colors.cream};
  border-top: ${({ $seamless, theme }) =>
    $seamless ? 'none' : `4px solid ${theme.colors.accent}`};
  font-size: 1rem;
`

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 500;
  font-size: clamp(2.4rem, 8vw, 4.5rem);
  color: ${({ theme }) => theme.colors.olive};
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0 0 40px;

  &::after {
    content: '';
    display: block;
    width: 64px;
    height: 3px;
    margin: 20px auto 0;
    background: ${({ theme }) => theme.colors.accent};
  }
`

export const MenuWrap = styled.div`
  max-width: 720px;
  margin: 48px auto 0;
`

export const MenuGroup = styled.section`
  margin-bottom: 56px;
`

export const MenuGroupTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  letter-spacing: -0.01em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.olive};
  text-align: left;
  margin: 0 0 8px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.olive};
`

export const MenuRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.creamDeep};
`

export const MenuName = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1rem;
`

export const MenuDetail = styled.div`
  grid-column: 1;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
`

export const MenuPrice = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.olive};
`

export const HoursList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto 32px;
  max-width: 480px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1rem;
  line-height: 1.8;
`

export const ServiceNote = styled.p`
  max-width: 640px;
  margin: 48px auto 0;
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
`
