import React, { useState } from 'react';
import { getCacheItem } from './apiService';

const GetCacheItem = () => {
    const [key, setKey] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await getCacheItem(key);
        setResponse(res);
    };

    return (
        <div>
            <h2>Get Cache Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Key: </label>
                    <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
                </div>
                <button type="submit">Get Item</button>
            </form>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
};

export default GetCacheItem;
