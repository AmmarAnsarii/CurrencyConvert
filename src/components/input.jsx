import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-purple-200 p-3 rounded-3xl text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none bg-transparent w-full py-1.5 placeholder-black"
                    type="number"
                    id={amountInputId}
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-full px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
