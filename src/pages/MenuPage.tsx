import { sampleMenu, sampleMenuHeading } from "../data/content";
import {
  MenuDetail,
  MenuGroup,
  MenuGroupTitle,
  MenuName,
  MenuPrice,
  MenuRow,
  MenuWrap,
  Notes,
  PageTitle,
  Section,
  ServiceNote,
} from "../components/styles";

export function MenuPage() {
  return (
    <Section>
      <PageTitle>Sample menu</PageTitle>
      <Notes>
        <p>{sampleMenuHeading}</p>
      </Notes>
      <MenuWrap>
        {sampleMenu.map((group) => (
          <MenuGroup key={group.title}>
            <MenuGroupTitle>{group.title}</MenuGroupTitle>
            {group.items.map((item) => (
              <MenuRow key={item.name}>
                <MenuName>{item.name}</MenuName>
                <MenuPrice>£{item.price}</MenuPrice>
                {item.detail ? <MenuDetail>{item.detail}</MenuDetail> : null}
              </MenuRow>
            ))}
          </MenuGroup>
        ))}
      </MenuWrap>
      <ServiceNote>
        A discretionary 10% service charge will be added to your bill.
      </ServiceNote>
    </Section>
  );
}
