import { useState } from 'react'

import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const [convertedAmount, setConvertedAmount] = useState(0)

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
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-800 text-white">
            <div className="w-full max-w-md mx-auto border border-gray-300 rounded-2xl p-6 backdrop-blur-md bg-white/90 shadow-xl">
                <div className="text-center mb-5">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Currency Converter
                    </h1>
                    <p className="text-sm text-gray-600">
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
                            onCurrencyChange={(currency) => setFrom(currency)}
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
        </div>
    )
}

export default App
