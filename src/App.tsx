import { useState } from 'react'
import { Header } from './components/Header/index'
import { Dashboard } from './components/Dashboard'
import { TransactionModal } from './components/TransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Modal from 'react-modal'
import usePersistedState from './hooks/usePersistedState'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { darkTheme } from './styles/themes/dark'

Modal.setAppElement('#root')

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', lightTheme)
  const toggleTheme = () => {
    setTheme(
      theme.title === 'light'
        ? { ...theme, ...darkTheme }
        : { ...theme, ...lightTheme }
    )
  }

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Header
          onOpenNewTransactionModal={handleOpenNewTransactionModal}
          toggleTheme={toggleTheme}
        />

        <Dashboard />

        <TransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
