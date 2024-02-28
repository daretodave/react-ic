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
            <label htmlFor="initial-investment">Initial Investment</label>
            <input type="number" id="initialInvestment" value={initialInvestment} onChange={handleOptionsChange}/>
        </div>
        <div className="input-group">
            <label htmlFor="annual-investment">Annual Investment</label>
            <input type="number" id="annualInvestment" value={annualInvestment} onChange={handleOptionsChange}/>

        </div>
        <div className="input-group">
            <label htmlFor="expected-return">Expected Return</label>
            <input type="number" id="expectedReturn" value={expectedReturn} onChange={handleOptionsChange}/>
        </div>
        <div className="input-group">
            <label htmlFor="duration">Duration (Years)</label>
            <input type="number" id="duration" value={duration} onChange={handleOptionsChange}/>
        </div>
    </div>
}