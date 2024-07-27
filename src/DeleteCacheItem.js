import React, { useState } from 'react';
import { deleteCacheItem } from './apiService';

const DeleteCacheItem = () => {
    const [key, setKey] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await deleteCacheItem(key);
        setResponse(res);
    };

    return (
        <div>
            <h2>Delete Cache Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Key: </label>
                    <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
                </div>
                <button type="submit">Delete Item</button>
            </form>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
};

export default DeleteCacheItem;
