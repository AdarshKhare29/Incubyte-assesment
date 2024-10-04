import React, { useState } from "react";
import { add } from "../../hooks/useCalculator";
import './stringCalculator.css'
const StringCalculator: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string>("");

    const handleCalculate = () => {
        const formattedInput = input.replaceAll("\\n", "\n");
        try {
            const output = add(formattedInput);
            setResult(output);
            setError("");
        } catch (err: any) {
            setError(err.message);
            setResult(null);
        }
    };
    return (
        <div
            style={{
                backgroundColor: 'lightblue',
                height: '100vh',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
            }}
        >
            <div className="calculatorContainer">
                <div className="title">String Calculator</div>
                <input
                    type="text"
                    placeholder="Enter numbers separated by commas"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="inputBox"
                    style={error ? { border: '1px solid red' } : {}}
                />
                <button className="calculateButton" onClick={handleCalculate}>Calculate</button>
                {error && <p className="resultDisplay" style={{ color: 'red' }}>Error: {error}</p>}
                {result !== null && <p className="resultDisplay">Result: {result}</p>}
            </div>
        </div>
    );
};

export default StringCalculator;
