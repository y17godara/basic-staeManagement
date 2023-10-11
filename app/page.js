"use client";
import React, { useState, useEffect } from 'react'
import { Account, Bonus } from '@/components/Account';

export default function Home({store}) {
  const [account, setAccount] = useState({anount: 0})
  const [bonus, setBonus] = useState({points: 0})

  const increment = () => {
    setAccount({amount: account.amount + 1})
  }

  const decrement = () => {
    setAccount({amount: account.amount - 1})
  }

  const addBonus = () => {
    setBonus({points: bonus.points + 1})
  }

  const removeBonus = () => {
    setBonus({points: bonus.points - 1})
  }

  return (
    <>
      <h1>Home</h1>
      <h2>Account</h2>

      <div>
      <p>Amount: {account.amount}</p>
      <Account
        increment={increment}
        decrement={decrement}
      />

      <h2>Bonus</h2>
      <p>Points: {bonus.points}</p>
      <Bonus
        addBonus={addBonus}
        removeBonus={removeBonus}
      />
      </div>
    </>
  )
}
