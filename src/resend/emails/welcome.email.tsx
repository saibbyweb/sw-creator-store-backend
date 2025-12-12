import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
  Hr,
} from '@react-email/components';

interface WelcomeEmailProps {
  name?: string;
}

const primary = '#FFFFFF';
const secondary = '#000000';
const tertiary = '#6dd26d';

export const WelcomeEmail = ({ name = 'there' }: WelcomeEmailProps) => {
  const previewText = `Welcome to our platform, ${name}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body
          style={{
            backgroundColor: secondary,
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
          }}
        >
          <Container
            style={{
              backgroundColor: secondary,
              margin: '0 auto',
              padding: '40px 20px',
              maxWidth: '600px',
            }}
          >
            {/* Logo Section */}
            <Section style={{ textAlign: 'center', paddingBottom: '32px' }}>
              <Img
                src="https://harud.s3.ap-south-1.amazonaws.com/sw-white-logo-200-square.png"
                width="120"
                height="120"
                alt="Logo"
                style={{
                  margin: '0 auto',
                  borderRadius: '12px',
                }}
              />
            </Section>

            {/* Main Content */}
            <Section
              style={{
                backgroundColor: secondary,
                padding: '32px',
                borderRadius: '8px',
                border: `1px solid rgba(109, 210, 109, 0.1)`,
              }}
            >
              <Heading
                style={{
                  color: primary,
                  fontSize: '32px',
                  fontWeight: '700',
                  textAlign: 'center',
                  margin: '0 0 16px 0',
                  lineHeight: '1.2',
                }}
              >
                Welcome, {name}! 🎉
              </Heading>

              <Text
                style={{
                  color: primary,
                  fontSize: '16px',
                  lineHeight: '26px',
                  textAlign: 'center',
                  margin: '0 0 32px 0',
                  opacity: 0.9,
                }}
              >
                We're thrilled to have you on board. Your account has been
                successfully created and you're ready to get started.
              </Text>

              {/* CTA Button */}
              <Section style={{ textAlign: 'center', margin: '32px 0' }}>
                <Button
                  href="https://yourapp.com/get-started"
                  style={{
                    backgroundColor: tertiary,
                    color: secondary,
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'inline-block',
                    padding: '14px 40px',
                    borderRadius: '6px',
                    border: 'none',
                  }}
                >
                  Get Started
                </Button>
              </Section>

              <Hr
                style={{
                  borderColor: 'rgba(109, 210, 109, 0.2)',
                  margin: '32px 0',
                }}
              />

              {/* Features/Benefits */}
              <Text
                style={{
                  color: primary,
                  fontSize: '18px',
                  fontWeight: '600',
                  margin: '0 0 20px 0',
                }}
              >
                What's next?
              </Text>

              <Section style={{ marginBottom: '16px' }}>
                <Text
                  style={{
                    color: primary,
                    fontSize: '15px',
                    lineHeight: '24px',
                    margin: '0',
                  }}
                >
                  <span style={{ color: tertiary, fontWeight: 'bold' }}>✓</span>{' '}
                  Complete your profile to personalize your experience
                </Text>
              </Section>

              <Section style={{ marginBottom: '16px' }}>
                <Text
                  style={{
                    color: primary,
                    fontSize: '15px',
                    lineHeight: '24px',
                    margin: '0',
                  }}
                >
                  <span style={{ color: tertiary, fontWeight: 'bold' }}>✓</span>{' '}
                  Explore our features and discover what we offer
                </Text>
              </Section>

              <Section style={{ marginBottom: '16px' }}>
                <Text
                  style={{
                    color: primary,
                    fontSize: '15px',
                    lineHeight: '24px',
                    margin: '0',
                  }}
                >
                  <span style={{ color: tertiary, fontWeight: 'bold' }}>✓</span>{' '}
                  Join our community and connect with others
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section style={{ textAlign: 'center', marginTop: '40px' }}>
              <Text
                style={{
                  color: primary,
                  fontSize: '14px',
                  lineHeight: '22px',
                  margin: '0 0 8px 0',
                  opacity: 0.7,
                }}
              >
                Need help? We're here for you.
              </Text>
              <Text
                style={{
                  color: primary,
                  fontSize: '14px',
                  lineHeight: '22px',
                  margin: '0',
                  opacity: 0.7,
                }}
              >
                Contact us at{' '}
                <a
                  href="mailto:support@saibbyweb.com"
                  style={{
                    color: tertiary,
                    textDecoration: 'none',
                  }}
                >
                  support@saibbyweb.com
                </a>
              </Text>

              <Hr
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  margin: '24px 0',
                }}
              />

              <Text
                style={{
                  color: primary,
                  fontSize: '12px',
                  lineHeight: '18px',
                  margin: '0',
                  opacity: 0.5,
                }}
              >
                © 2025 Your Company. All rights reserved.
                <br />
                You're receiving this email because you signed up for an
                account.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
