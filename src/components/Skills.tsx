import React, { useState, useMemo } from 'react';
import { Cpu, Sliders, RefreshCw, Layers, Check, BarChart3, Database } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  // ML Playground state
  const [threshold, setThreshold] = useState(0.5);
  const [sampleSize, setSampleSize] = useState(250);
  const [modelType, setModelType] = useState<'random_forest' | 'logistic_regression'>('random_forest');

  // Compute live confusion matrix and evaluation metrics based on parameters
  const mlMetrics = useMemo(() => {
    // Ground truth simulated distribution: 40% positive, 60% negative
    const actualPositives = Math.round(sampleSize * 0.4);
    const actualNegatives = sampleSize - actualPositives;

    // Model discrimination power
    const separationScore = modelType === 'random_forest' ? 0.85 : 0.72;

    // Calculate TP, FP, FN, TN as function of threshold
    // Lower threshold -> more predicted positive -> higher recall, lower precision
    // Higher threshold -> fewer predicted positive -> higher precision, lower recall
    const baseTrueRate = 1 / (1 + Math.exp(-4 * (1 - threshold * 1.8)));
    const baseFalseRate = 1 / (1 + Math.exp(-4 * (1 - threshold * 2.8)));

    const tp = Math.min(actualPositives, Math.max(1, Math.round(actualPositives * baseTrueRate * separationScore)));
    const fn = actualPositives - tp;

    const fp = Math.min(actualNegatives, Math.max(1, Math.round(actualNegatives * (1 - separationScore) * baseFalseRate)));
    const tn = actualNegatives - fp;

    const total = tp + fp + fn + tn;
    const accuracy = ((tp + tn) / total) * 100;
    const precision = tp + fp > 0 ? (tp / (tp + fp)) * 100 : 0;
    const recall = tp + fn > 0 ? (tp / (tp + fn)) * 100 : 0;
    const f1 = precision + recall > 0 ? (2 * (precision * recall)) / (precision + recall) : 0;

    return {
      tp,
      fp,
      fn,
      tn,
      accuracy: accuracy.toFixed(1),
      precision: precision.toFixed(1),
      recall: recall.toFixed(1),
      f1: f1.toFixed(1),
      rocAuc: (separationScore * 100).toFixed(1),
    };
  }, [threshold, sampleSize, modelType]);

  return (
    <section id="skills" className="py-20 border-b border-indigo-950/60 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
            <span>Technical Capabilities & Systems Knowledge</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>AI / ML & Full Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Technical Skills & Competencies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Proficiencies across machine learning architectures, exploratory data analysis, and scalable web engineering.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.name}
              className="rounded-2xl border border-indigo-500/20 bg-[#090d19]/80 backdrop-blur-xl p-6 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:border-indigo-400/40 transition-colors"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {group.name}
                </h3>
                <p className="text-xs text-slate-400 mb-5">
                  {group.description}
                </p>

                {/* Clean unboxed skill list */}
                <div className="space-y-3.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="border-b border-slate-800/60 pb-2.5 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="font-mono text-indigo-400 text-[11px]">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive ML Evaluation Simulator */}
        <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-[#0b1022]/90 via-[#080c1a]/95 to-[#050711] p-6 lg:p-8 shadow-[0_0_50px_rgba(99,102,241,0.2)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-indigo-500/20">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Interactive ML Sandbox</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Machine Learning Model Evaluation Simulator
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                Demonstrating practical understanding of classification decision boundaries, precision-recall trade-offs, and confusion matrix diagnostics in Scikit-learn.
              </p>
            </div>

            {/* Model Type Selector */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 shrink-0 self-start lg:self-auto">
              <button
                onClick={() => setModelType('random_forest')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  modelType === 'random_forest'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Random Forest
              </button>
              <button
                onClick={() => setModelType('logistic_regression')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  modelType === 'logistic_regression'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Logistic Regression
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Controls */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-300 font-medium">Decision Threshold ($\tau$)</span>
                  <span className="font-mono text-indigo-400 font-bold">{threshold.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="0.9"
                  step="0.05"
                  value={threshold}
                  onChange={(e) => setThreshold(parseFloat(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer bg-slate-800 h-2 rounded-lg"
                  aria-label="Adjust classification decision threshold"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>0.1 (High Recall)</span>
                  <span>0.5 (Balanced)</span>
                  <span>0.9 (High Precision)</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-300 font-medium">Evaluation Test Samples</span>
                  <span className="font-mono text-indigo-400 font-bold">{sampleSize} records</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[100, 250, 500].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSampleSize(size)}
                      className={`py-1.5 text-xs font-mono rounded-md border transition-colors ${
                        sampleSize === size
                          ? 'bg-slate-800 border-indigo-500 text-white'
                          : 'border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-200 block mb-1">
                  Analytical Insight:
                </span>
                {threshold < 0.4 ? (
                  <span>
                    Low threshold ensures fewer False Negatives (higher Recall), ideal for screening scenarios where missing a positive case is costly.
                  </span>
                ) : threshold > 0.6 ? (
                  <span>
                    High threshold reduces False Positives (higher Precision), minimizing false alarms and ensuring higher confidence in positive predictions.
                  </span>
                ) : (
                  <span>
                    Balanced threshold provides optimal F1-score equilibrium between precision and recall for general classification pipelines.
                  </span>
                )}
              </div>
            </div>

            {/* Confusion Matrix & Metrics Display */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6">
              {/* 2x2 Confusion Matrix */}
              <div className="sm:col-span-7">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Confusion Matrix</span>
                  <span className="text-[11px] text-slate-400 font-mono">Actual vs Predicted</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                    <span className="text-[10px] text-emerald-400 font-mono block">True Positive (TP)</span>
                    <span className="text-xl font-bold font-mono text-emerald-300 tabular-nums">{mlMetrics.tp}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-800/40">
                    <span className="text-[10px] text-rose-400 font-mono block">False Positive (FP)</span>
                    <span className="text-xl font-bold font-mono text-rose-300 tabular-nums">{mlMetrics.fp}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-800/40">
                    <span className="text-[10px] text-amber-400 font-mono block">False Negative (FN)</span>
                    <span className="text-xl font-bold font-mono text-amber-300 tabular-nums">{mlMetrics.fn}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-800/40">
                    <span className="text-[10px] text-blue-400 font-mono block">True Negative (TN)</span>
                    <span className="text-xl font-bold font-mono text-blue-300 tabular-nums">{mlMetrics.tn}</span>
                  </div>
                </div>
              </div>

              {/* Performance Scorecard */}
              <div className="sm:col-span-5 flex flex-col justify-between space-y-2.5">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Accuracy</span>
                  <span className="text-xs font-mono font-bold text-white tabular-nums">{mlMetrics.accuracy}%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Precision</span>
                  <span className="text-xs font-mono font-bold text-indigo-300 tabular-nums">{mlMetrics.precision}%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Recall</span>
                  <span className="text-xs font-mono font-bold text-indigo-300 tabular-nums">{mlMetrics.recall}%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">F1-Score</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 tabular-nums">{mlMetrics.f1}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
