import { Row, Text } from '@umami/react-zen';
import { CURRENT_VERSION, HOMEPAGE_URL } from '@/lib/constants';
import { Logo } from '@/components/svg';

export function Footer() {
  return (
    <Row as="footer" paddingY="6" justifyContent="flex-end" alignItems="center" gap="2">
      <a href={HOMEPAGE_URL} target="_blank">
        <Row alignItems="center" gap="2">
          <Logo style={{ width: '80px' }} />
          <Text>{`v${CURRENT_VERSION}`}</Text>
        </Row>
      </a>
    </Row>
  );
}
