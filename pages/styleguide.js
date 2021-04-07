import Page from 'partials/Page'
import Text from 'components/Text'

const StyleGuide = () => (
  <Page>
    <Text mode={Text.MODES.body}>Body</Text>
    <Text mode={Text.MODES.caption}>Caption</Text>
    <Text mode={Text.MODES.heading} allCaps>
      Heading
    </Text>
    <Text mode={Text.MODES.subheading} allCaps>
      Subheading
    </Text>
    <Text mode={Text.MODES.heading}>Heading</Text>
    <Text mode={Text.MODES.subheading}>Subheading</Text>

    <br />
    <br />
    <br />

    <Text element={Text.ELEMENTS.h1}>Child is just a plain string</Text>
    <Text maxLength={52}>
      Child starts with a string <span>but includes an element</span>, then
      resumes with more&hellip;, text! <span>bonus element</span>
    </Text>
    <Text>
      <span>Child is just elements</span>
      <br />
      <span>Wowza!</span>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </Text>
    <Text className="empty text element" />
  </Page>
)

export default StyleGuide
