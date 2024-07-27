const API_URL = 'http://localhost:8080';

export const setCacheItem = async (key, value, exp) => {
    const response = await fetch(`${API_URL}/set`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: parseInt(key, 10), value: parseInt(value, 10), exp: parseInt(exp, 10) }),
    });
    if (!response.ok) {
        throw new Error('Failed to set cache item');
    }
    return response.json();
};

export const getCacheItem = async (key) => {
    const response = await fetch(`${API_URL}/get?key=${key}`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Item not found');
    }
    return response.json();
};
