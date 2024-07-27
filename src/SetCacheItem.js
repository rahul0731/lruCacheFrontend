import React, { useState } from 'react';
import { setCacheItem } from './apiService';

const SetCacheItem = () => {
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [exp, setExp] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await setCacheItem(parseInt(key, 10), parseInt(value, 10), parseInt(exp, 10));
            setResponse(res);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Set Cache Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Key: </label>
                    <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
                </div>
                <div>
                    <label>Value: </label>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                <div>
                    <label>Expiration (seconds): </label>
                    <input type="text" value={exp} onChange={(e) => setExp(e.target.value)} />
                </div>
                <button type="submit">Set Item</button>
            </form>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SetCacheItem;
