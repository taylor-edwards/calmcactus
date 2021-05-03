import Page from 'partials/Page'
import Button from 'components/Button'
import Colorize from 'components/Colorize'
import { Title } from 'components/Helmet'
import Image from 'components/Image'
import Input, { InputGroup, InputRow } from 'components/Input'
import ProductLabel from 'components/ProductLabel'
import Text from 'components/Text'
import styles from 'styles/checkout.module.scss'

/**
 * Cart contents:
 *   - cached clientside
 *   - validated on submission
 */

const Checkout = () => (
  <Page>
    <Title text="Checkout | Calm Cactus" />

    {/* Cart block */}
    <section className={styles.section}>
      <ProductLabel
        title="3 items in cart"
        subtitle="Total before shipping & taxes: $175"
        className={styles.cartHeader}
      />

      <div className={styles.cartItem}>
        <Image
          src="https://via.placeholder.com/1000/272727/fff&text=A"
          className={styles.cartItemImage}
        />
        <div>
          <Text mode={Text.MODES.heading} maxLength={20}>
            Artwork name
          </Text>
          <Text mode={Text.MODES.caption}>
            <span className={styles.indicator}>&times;</span>1 &nbsp;
            <span className={styles.separator}>|</span> $150
          </Text>
        </div>
      </div>

      <div className={styles.cartItem}>
        <Image
          src="https://via.placeholder.com/1000/272727/fff&text=B"
          className={styles.cartItemImage}
        />
        <div>
          <Text mode={Text.MODES.heading} maxLength={20}>
            Product with long name that runs off the edge
          </Text>
          <Text mode={Text.MODES.caption}>
            <span className={styles.indicator}>&times;</span>2 &nbsp;
            <span className={styles.separator}>|</span> $80
          </Text>
        </div>
      </div>

      <div className={styles.cartItem}>
        <Image
          src="https://via.placeholder.com/1000/272727/fff&text=C"
          className={styles.cartItemImage}
        />
        <div>
          <Text mode={Text.MODES.heading} maxLength={20}>
            Another product
          </Text>
          <Text mode={Text.MODES.caption}>
            <span className={styles.indicator}>&times;</span>1 &nbsp;
            <span className={styles.separator}>|</span> $120
          </Text>
        </div>
      </div>
    </section>

    <div className={styles.grid}>
      {/* Form column */}
      <section className={styles.section}>
        <Text mode={Text.MODES.heading} className={styles.sectionTitle}>
          Shipping &amp; Payment
        </Text>

        <label>
          <Text mode={Text.MODES.heading} className={styles.formTitle}>
            Email
          </Text>
          <Input
            placeholder="hello@calmcact.us"
            type="email"
            autoComplete="email"
          />
        </label>

        <Text mode={Text.MODES.heading} className={styles.formTitle}>
          Shipping Address
        </Text>
        <InputGroup>
          <Input
            placeholder="Jane Doe"
            type="text"
            autoComplete="cc-name"
            title="Name"
          />
          <Input
            placeholder="Address line 1"
            type="text"
            autoComplete="address-line1"
            title="Address line 1"
          />
          <Input
            placeholder="Address line 2"
            type="text"
            autoComplete="address-line2"
            title="Address line 2"
          />
          <InputRow>
            <Input
              placeholder="City"
              type="text"
              autoComplete="address-level2"
              title="City"
            />
            <Input
              placeholder="ZIP Code"
              type="text"
              autoComplete="postal-code"
              title="ZIP Code"
            />
          </InputRow>
          <Input
            placeholder="State"
            type="text"
            autoComplete="address-level1"
            title="State"
          />
          <Input
            placeholder="Country"
            type="text"
            autoComplete="off"
            title="Country (USA only)"
            value="USA"
            disabled
          />
        </InputGroup>

        <Text mode={Text.MODES.heading} className={styles.formTitle}>
          Card Information
        </Text>
        <InputGroup>
          <Input
            placeholder="4242 4242 4242 4242"
            type="text"
            pattern="^\s*([\d]{4}[\s-]*){4}$"
            autoComplete="cc-number"
            title="Card number"
            className={styles.cardInput}
          />
          <InputRow>
            <Input
              placeholder="12/2025"
              type="text"
              pattern="^\s*\d{1,2}/(\d{2}|\d{4})\s*$"
              autoComplete="cc-exp"
              title="Expiration date (MM/YY)"
            />
            <Input
              placeholder="123"
              type="text"
              pattern="^\s*\d+\s*$"
              autoComplete="cc-csc"
              title="Security code"
            />
          </InputRow>
        </InputGroup>
      </section>

      {/* Summary column */}
      <section className={styles.section}>
        <Text mode={Text.MODES.heading} className={styles.sectionTitle}>
          Shipping Options &amp; Order Total
        </Text>

        <Text mode={Text.MODES.caption} className={styles.summary}>
          <span>Subtotal:</span>
          <span>350.00</span>

          <span>Shipping:</span>
          <span>0.00</span>

          <span>Taxes &amp; fees:</span>
          <span>35.00</span>

          <Text mode={Text.MODES.caption} allCaps className={styles.orderTotal}>
            Total
          </Text>
          <span className={styles.orderTotal}>385.00</span>
        </Text>

        <Colorize color="coral">
          <Button className={styles.btn}>
            <Text mode={Text.MODES.heading} allCaps>
              Pay now
            </Text>
          </Button>
        </Colorize>
      </section>
    </div>
  </Page>
)

export default Checkout
