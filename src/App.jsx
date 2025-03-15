import { useState } from 'react'

import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
import { BackgroundLines } from './components/ui/background-lines'

function App() {
    const [amount, setAmount] = useState()
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const [convertedAmount, setConvertedAmount] = useState()

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <div>
            <BackgroundLines className="flex justify-center items-center">
                <div className="w-full max-w-md mx-auto border border-gray-700 rounded-2xl p-6 backdrop-blur-[2px] bg-white/10">
                    <div className="text-center mb-5">
                        <h1 className="text-2xl font-bold text-gray-100">
                            Currency Converter
                        </h1>
                        <p className="text-sm text-gray-500">
                            Easily convert currencies in real-time
                        </p>
                    </div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            convert()
                        }}
                    >
                        <div className="w-full mb-3">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) =>
                                    setFrom(currency)
                                }
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-10 flex items-center justify-center mb-3">
                            <button
                                type="button"
                                className="absolute z-10 border-2 border-white rounded-full bg-indigo-600 text-white px-3 py-1 font-medium hover:bg-indigo-700 transition-transform transform hover:scale-105"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mb-5">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </BackgroundLines>
        </div>
    )
}

export default App
