// src/App.js
import React from 'react';
import SetCacheItem from './SetCacheItem';
import GetCacheItem from './GetCacheItem';
import CacheMonitor from './CacheMonitor';

const App = () => {
  return (
      <div className="App">
        <h1>LRU Cache</h1>
        <SetCacheItem />
        <GetCacheItem />
        <CacheMonitor />
      </div>
  );
};

export default App;
