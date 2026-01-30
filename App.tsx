
import React, { useState, useMemo, useEffect } from 'react';
import { generateDataset } from './services/data-service';
import { MLEngine } from './services/ml-engine';
import Dashboard from './components/Dashboard';
import PredictionPanel from './components/PredictionPanel';
import Header from './components/Header';
import { CEBSample } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'predict'>('dashboard');
  const [dataset, setDataset] = useState<CEBSample[]>([]);
  
  // Initialize data on mount
  useEffect(() => {
    const data = generateDataset(200);
    setDataset(data);
  }, []);

  const engine = useMemo(() => new MLEngine(dataset), [dataset]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {activeTab === 'dashboard' ? (
          <Dashboard dataset={dataset} engine={engine} />
        ) : (
          <PredictionPanel engine={engine} />
        )}
      </main>

      <footer className="bg-slate-900 text-white py-6 text-center text-sm">
        <p>&copy; 2024 CEB Predictor Pro | Advanced Materials Research Laboratory | Wardha Region Soil Analysis</p>
      </footer>
    </div>
  );
};

export default App;
