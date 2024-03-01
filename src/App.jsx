import Header from "./components/Header.jsx";
import Options from "./components/Options.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

const INITIAL_OPTIONS = {
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12
}
function App() {

    const [options, setOptions] = useState(INITIAL_OPTIONS);

    const isValid = options.duration >= 1;

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
            {!isValid && <p class="center">Duration must be at least 1 year!</p>}
            {isValid && <Results options={options} />}
        </>
    )
}

export default App
