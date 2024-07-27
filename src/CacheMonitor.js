import React, { useEffect, useState } from 'react';

const CacheMonitor = () => {
    const [cacheItems, setCacheItems] = useState([]);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080/ws');

        socket.onopen = () => {
            console.log("WebSocket connection established");
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("Received data:", data);
            setCacheItems((prevItems) => {
                const updatedItems = prevItems.filter(item => item.key !== data.key);
                return [...updatedItems, data];
            });
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return () => {
            socket.close();
        };
    }, []);


    console.log("CacheItems:", cacheItems);
    return (
        <div>
            <h2>Cache Monitor</h2>
            <ul>
                {cacheItems.map((item, index) => (
                    <li key={index}>
                        Key: {item.key}, Value: {item.value}, Expiration: {item.exp}s
                    </li>
                ))}
                {cacheItems.length === 0 && <p>No cache items yet</p>}
            </ul>
        </div>
    );
};

export default CacheMonitor;
