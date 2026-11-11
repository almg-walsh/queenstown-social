import { Button } from '@mui/material'
import { hours, images, site } from '../data/content'
import {
  Body,
  CenterActions,
  Heading,
  HoursList,
  MailLink,
  PageTitle,
  Section,
  WidePhoto,
} from '../components/styles'

export function OrderPage() {
  return (
    <>
      <WidePhoto src={images.coffee} alt="A cup of coffee on the pass" />
      <Section>
        <PageTitle>Order now</PageTitle>
        <Heading>Walk-in kitchen</Heading>
        <HoursList>
          {hours.map((row) => (
            <li key={row.days}>
              {row.days} · {row.time}
            </li>
          ))}
        </HoursList>
        <Body>
          We cook to the room, not to an app. Come in, put your name
          down, and we will look after you. Large takeaway coffees and
          pastry are available from the counter until we sell out.
        </Body>
        <Body>
          Questions or catering:{' '}
          <MailLink href={`mailto:${site.email}`}>{site.email}</MailLink>
          <br />
          {site.phone}
        </Body>
        <CenterActions>
          <Button
            component="a"
            href={`mailto:${site.email}?subject=Queenstown%20Social%20table`}
            variant="outlined"
          >
            Email us
          </Button>
        </CenterActions>
      </Section>
    </>
  )
}
