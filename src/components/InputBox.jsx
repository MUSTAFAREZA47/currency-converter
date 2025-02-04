import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = '',
}) {
    const amountInputId = useId()

    return (
        <div
            className={`bg-white p-5 rounded-2xl shadow-lg text-sm flex items-center gap-4 ${className}`}
        >
            {/* Amount Input Section */}
            <div className="w-1/2">
                <label
                    htmlFor={amountInputId}
                    className="text-gray-500 mb-2 inline-block font-medium"
                >
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="w-full outline-none bg-gray-100 text-gray-800 py-2 px-3 rounded-md focus:ring-2 focus:ring-blue-500"
                    type="number"
                    placeholder="Enter amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>

            {/* Currency Selection Section */}
            <div className="w-1/2">
                <label className="text-gray-500 mb-2 block font-medium">
                    Currency Type
                </label>
                <select
                    className="w-full bg-gray-100 text-gray-800 py-2 px-3 rounded-md focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox
