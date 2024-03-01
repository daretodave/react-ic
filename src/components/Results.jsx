import {calculateInvestmentResults, formatter as defaultFormatter} from "../util/investment.js";

export default function Results({options, formatter = defaultFormatter}) {
    const data = calculateInvestmentResults(options);
    return <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map((yearData, index) => {
                    const {year, interest, valueEndOfYear, totalInterest, investedCapital} = yearData;
                    return <tr key={index}>
                        <td>{year}</td>
                        <td>{formatter.format(valueEndOfYear)}</td>
                        <td>{formatter.format(interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(investedCapital)}</td>
                    </tr>
                })}
            </tbody>
        </table>
}