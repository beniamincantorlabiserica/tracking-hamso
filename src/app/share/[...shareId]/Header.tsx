import { Icon, Row, Text, ThemeButton } from '@umami/react-zen';
import { LanguageButton } from '@/components/input/LanguageButton';
import { PreferencesButton } from '@/components/input/PreferencesButton';
import { Logo } from '@/components/svg';

export function Header() {
  return (
    <Row as="header" justifyContent="space-between" alignItems="center" paddingY="3">
      <a href="https://hamso.com" target="_blank" rel="noopener">
        <Logo />
      </a>
      <Row alignItems="center" gap>
        <ThemeButton />
        <LanguageButton />
        <PreferencesButton />
      </Row>
    </Row>
  );
}
