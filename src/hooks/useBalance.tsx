import { Web3ReactHooks } from "@web3-react/core"
import { BigNumber } from "@ethersproject/bignumber"
import { useEffect, useState } from "react"

function useBalance(
  provider?: ReturnType<Web3ReactHooks['useProvider']>,
  account?: string
): BigNumber | undefined {
  const [balance, setBalances] = useState<BigNumber | undefined>()

  useEffect(() => {
    if (provider && account) {
      let stale = false

      provider.getBalance(account).then((balance: BigNumber) => {
        console.log("balance", balance)
        if (stale) return
        setBalances(balance)
      })

      return () => {
        stale = true
        setBalances(undefined)
      }
    }
  }, [provider, account])

  return balance
}

export default useBalance