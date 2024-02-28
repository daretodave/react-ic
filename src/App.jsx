import Header from "./components/Header.jsx";
import Options from "./components/Options.jsx";
import {useState} from "react";
import {calculateInvestmentResults, formatter} from "./util/investment.js";
import Results from "./components/Results.jsx";

const INITIAL_OPTIONS = {
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12
}
function App() {

    const [options, setOptions] = useState(INITIAL_OPTIONS);

    console.log(options)
    const data = calculateInvestmentResults(options);

    function handleOptionsChange(option, value) {
        setOptions(prevOptions => {
            value = parseInt(value || '0', 10);

            return {
                ...prevOptions,
                [option]: value
            }
        });
    }

    return (
        <>
            <Header/>
            <Options initialOptions={INITIAL_OPTIONS} onOptionsChange={handleOptionsChange}/>
            <Results data={data} formatter={formatter}/>
        </>
    )
}

export default App
