import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { aboutCopy, images, menuNotes, site, suppliers } from "../data/content";
import {
  AboutGrid,
  Body,
  CenterActions,
  CopyBlock,
  Heading,
  Hero,
  MailLink,
  Notes,
  Photo,
  Section,
  Split,
  SupplierList,
  WidePhoto,
} from "../components/styles";

export function HomePage() {
  return (
    <>
      <Hero
        src={images.hero}
        alt="Brunch plates, coffee and toast on a cafe table"
      />

      <Section $tone="olive">
        <CopyBlock>
          {aboutCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </CopyBlock>
      </Section>

      <Section>
        <AboutGrid>
          <Photo src={images.interior} alt="The dining room" />

          <Notes>
            {menuNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </Notes>
        </AboutGrid>
        <CenterActions>
          <Button component={Link} to="/menu" variant="outlined">
            Sample menu
          </Button>
        </CenterActions>
      </Section>

      <WidePhoto src={images.table} alt="Shared plates on a linen table" />

      <Section $tone="olive">
        <Split>
          <div>
            <Heading>Find us</Heading>
            <Body>
              {site.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </Body>
            <Body>
              We do not take bookings — first come, first served. The host will
              give you a wait time at the door.
            </Body>
            <Body>
              Get in touch:{" "}
              <MailLink href={`mailto:${site.email}`}>{site.email}</MailLink>
            </Body>
          </div>
          <div>
            <Heading>Who we work with</Heading>
            <SupplierList>
              {suppliers.map((group) => (
                <div key={group.heading}>
                  <h3>{group.heading}</h3>
                  {group.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              ))}
            </SupplierList>
          </div>
        </Split>
      </Section>
    </>
  );
}
