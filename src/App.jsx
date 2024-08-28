import { useState, useEffect } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  useEffect(() => {
    if (amount > 0) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }, [amount, from, to, currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  };

  const handleAmountChange = (newAmount) => {
    setAmount(Number(newAmount));
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center border-black items-center bg-cover bg-no-repeat backdrop-blur-lg"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto rounded-lg p-5  bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Optionally, add any additional logic here
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={handleAmountChange}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-white text-black px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
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
              className="w-full bg-rose-300 text-black px-4 py-3"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

