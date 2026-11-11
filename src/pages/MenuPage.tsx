import { sampleMenu } from '../data/content'
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
} from '../components/styles'

export function MenuPage() {
  return (
    <Section>
      <PageTitle>Sample menu</PageTitle>
      <Notes>
        <p>
          A weekday snapshot. Weekend pancakes replace a couple of
          savoury plates. Ask about vegan and gluten-free swaps.
        </p>
      </Notes>
      <MenuWrap>
        {sampleMenu.map((group) => (
          <MenuGroup key={group.title}>
            <MenuGroupTitle>{group.title}</MenuGroupTitle>
            {group.items.map((item) => (
              <MenuRow key={item.name}>
                <MenuName>{item.name}</MenuName>
                <MenuPrice>${item.price}</MenuPrice>
                {item.detail ? <MenuDetail>{item.detail}</MenuDetail> : null}
              </MenuRow>
            ))}
          </MenuGroup>
        ))}
      </MenuWrap>
    </Section>
  )
}
