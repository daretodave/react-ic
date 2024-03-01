export default function Options({onOptionsChange, initialOptions}) {
    const {
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    } = initialOptions;

    function handleOptionsChange(event) {
        const {id, value} = event.target;

        initialOptions[id] = value;
        onOptionsChange(id, value);
    }

    return <div id="user-input">
        <div className="input-group">
            <p>

                <label htmlFor="initial-investment">Initial Investment</label>
                <input type="number" required id="initialInvestment" value={initialInvestment} onChange={handleOptionsChange}/>
            </p>
            <p>
                <label htmlFor="annual-investment">Annual Investment</label>
                <input type="number" required id="annualInvestment" value={annualInvestment} onChange={handleOptionsChange}/>
            </p>
            <p>
                <label htmlFor="expected-return">Expected Return</label>
                <input type="number" required id="expectedReturn" value={expectedReturn} onChange={handleOptionsChange}/>
            </p>
            <p>
                <label htmlFor="duration">Duration (Years)</label>
                <input type="number" required id="duration" value={duration} onChange={handleOptionsChange}/>
            </p>
        </div>
    </div>
}