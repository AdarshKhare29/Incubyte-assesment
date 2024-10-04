import React, { useState } from "react";
import { add } from "../hooks/useCalculator";
const StringCalculator: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

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
    ;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
        }}>
            <h1>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter numbers (e.g. "1", "2")'
                style={styles.input}
            />
            <button onClick={handleCalculate} style={styles.button}>
                Calculate
            </button>
            <p>Result: {result}</p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        marginBottom: '10px',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default StringCalculator;
