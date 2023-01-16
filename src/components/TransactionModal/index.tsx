import Modal from 'react-modal'
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

import { XCircle, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import {
  Container,
  TransactionTypeContainer,
  RadioBox,
  RadioBox2,
} from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function TransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button">
        <XCircle
          className="close-button-modal"
          size={32}
          color="#202024"
          weight="light"
          onClick={onRequestClose}
        />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount.toString()}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            className="income-button"
            onClick={() => {
              setType('deposit')
            }}
            isActive={type === 'deposit'}
          >
            <ArrowCircleUp
              alt="Entrada"
              size={32}
              color="#33CC95"
              weight="fill"
            />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox2
            type="button"
            className="outcome-button"
            onClick={() => {
              setType('withdraw')
            }}
            isActive={type === 'withdraw'}
          >
            <ArrowCircleDown
              alt="Saída"
              size={32}
              color="#e52e4d"
              weight="fill"
            />
            <span>Saída</span>
          </RadioBox2>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
