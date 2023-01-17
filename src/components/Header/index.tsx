import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Container, Content } from './styles'
import { shade } from 'polished'
import { Aperture } from 'phosphor-react'
import Switch from 'react-switch'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
  toggleTheme: () => void
}

export function Header({
  onOpenNewTransactionModal,
  toggleTheme,
}: HeaderProps) {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <Content>
        <Aperture
          className="aperture-logo"
          size={90}
          alt="Aperture Wallet Logo"
        />
        <span>aperture</span>
        <p>wallet</p>

        <Switch
          className="theme-switch"
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={30}
          handleDiameter={4}
          offColor={colors.primary && shade(0.15, colors.primary)}
          onColor={colors.secondary}
        />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
