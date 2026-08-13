import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, Play, RotateCcw, Sparkles, Check, Copy } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveTerminalModal: React.FC<InteractiveTerminalModalProps> = ({
  isOpen,
  onClose
}) => {
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output' | 'system'; text: string }>>([
    { type: 'system', text: 'MI-CORE AI OS [Version 3.4.19-2025]' },
    { type: 'system', text: 'Type "help" or click quick chips below to navigate.' },
    { type: 'output', text: 'Ready for user inference.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTraining, setIsTraining] = useState(false);
  const [copied, setCopied] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isTraining]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    // Add input to history
    setHistory(prev => [...prev, { type: 'input', text: cmdStr }]);

    if (trimmed === 'clear') {
      setHistory([
        { type: 'system', text: 'MI-CORE AI OS [Screen Cleared]' }
      ]);
      setInputVal('');
      return;
    }

    if (trimmed === 'train') {
      runTrainingSimulation();
      setInputVal('');
      return;
    }

    if (TERMINAL_COMMANDS[trimmed]) {
      setHistory(prev => [...prev, { type: 'output', text: TERMINAL_COMMANDS[trimmed] }]);
    } else {
      setHistory(prev => [
        ...prev,
        {
          type: 'output',
          text: `Command not found: "${trimmed}". Type "help" to view valid commands.`
        }
      ]);
    }

    setInputVal('');
  };

  const runTrainingSimulation = () => {
    if (isTraining) return;
    setIsTraining(true);

    const epochs = [
      { epoch: 1, loss: 0.4821, val_r2: 0.781, time: '210ms' },
      { epoch: 2, loss: 0.3402, val_r2: 0.845, time: '205ms' },
      { epoch: 3, loss: 0.2215, val_r2: 0.899, time: '212ms' },
      { epoch: 4, loss: 0.1654, val_r2: 0.932, time: '208ms' },
      { epoch: 5, loss: 0.1102, val_r2: 0.948, time: '215ms' },
      { epoch: 6, loss: 0.0894, val_r2: 0.957, time: '209ms' },
      { epoch: 7, loss: 0.0712, val_r2: 0.965, time: '211ms' }
    ];

    setHistory(prev => [
      ...prev,
      { type: 'system', text: 'Initializing PyTorch model: Bidirectional GRU (2x128 units)...' },
      { type: 'system', text: 'Dataset: 1,600 tensor samples | Optimizer: AdamW (lr=1e-3)' }
    ]);

    epochs.forEach((step, idx) => {
      setTimeout(() => {
        setHistory(prev => [
          ...prev,
          {
            type: 'output',
            text: `[Epoch ${step.epoch}/7] loss: ${step.loss.toFixed(4)} | val_R²: ${step.val_r2.toFixed(4)} | ${step.time}`
          }
        ]);

        if (idx === epochs.length - 1) {
          setIsTraining(false);
          setHistory(prev => [
            ...prev,
            {
              type: 'system',
              text: '✓ Training checkpoint converged. Validation R² = 0.9650. Model weights cached to ./checkpoints/best_gru.pt'
            }
          ]);
        }
      }, (idx + 1) * 450);
    });
  };

  const quickChips = ['help', 'bio', 'luminary', 'tek', 'skills', 'train', 'contact', 'jdm'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-3xl bg-[#0d0d0d] border border-[#262626] rounded-xl shadow-2xl overflow-hidden flex flex-col h-[82vh] max-h-[640px]"
          >
            {/* Header bar */}
            <div className="bg-[#121212] px-4 py-3 border-b border-[#222] flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-3 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                  <Terminal size={13} className="text-[#c9a84c]" />
                  matheesha@melbourne-npu: ~/portfolio
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCommand('clear')}
                  title="Clear Terminal"
                  className="text-zinc-500 hover:text-zinc-300 text-xs px-2 py-0.5 rounded border border-[#222] hover:border-zinc-700 flex items-center gap-1 font-mono transition-colors"
                >
                  <RotateCcw size={11} />
                  clear
                </button>
                <button
                  onClick={onClose}
                  className="text-zinc-400 hover:text-white p-1 rounded-md hover:bg-zinc-800 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 overflow-y-auto p-4 font-mono text-xs sm:text-sm space-y-2 bg-[#0a0a0a] text-zinc-300"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, index) => (
                <div key={index} className="leading-relaxed">
                  {item.type === 'input' && (
                    <div className="flex items-start gap-2 text-zinc-200">
                      <span className="text-[#c9a84c] font-bold select-none">&gt;</span>
                      <span className="text-zinc-100 font-semibold">{item.text}</span>
                    </div>
                  )}
                  {item.type === 'output' && (
                    <pre className="text-zinc-300 whitespace-pre-wrap font-mono pl-4 text-xs sm:text-[13px] border-l border-[#222] py-0.5 my-1">
                      {item.text}
                    </pre>
                  )}
                  {item.type === 'system' && (
                    <div className="text-[#c9a84c]/90 text-xs italic pl-4 border-l border-[#c9a84c]/30">
                      {item.text}
                    </div>
                  )}
                </div>
              ))}

              {isTraining && (
                <div className="flex items-center gap-2 text-[#c9a84c] text-xs py-1 pl-4">
                  <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-ping" />
                  <span>Computing backpropagation gradients across tensors...</span>
                </div>
              )}

              <div ref={terminalBottomRef} />
            </div>

            {/* Quick chips bar */}
            <div className="bg-[#101010] border-t border-[#1f1f1f] px-3 py-2 flex items-center gap-1.5 overflow-x-auto">
              <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider whitespace-nowrap mr-1">
                Quick:
              </span>
              {quickChips.map(chip => (
                <button
                  key={chip}
                  onClick={() => handleCommand(chip)}
                  className="px-2 py-0.5 rounded bg-[#181818] hover:bg-[#c9a84c]/20 hover:text-[#c9a84c] border border-[#2a2a2a] text-zinc-400 text-[11px] font-mono transition-colors whitespace-nowrap"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Command input prompt */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputVal);
              }}
              className="bg-[#0d0d0d] px-4 py-3 border-t border-[#222] flex items-center gap-2"
            >
              <span className="text-[#c9a84c] font-mono font-bold text-sm select-none">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type a command (e.g. 'luminary', 'train', 'bio', 'help')..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-zinc-100 placeholder:text-zinc-600"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-[#181818] hover:bg-[#c9a84c] hover:text-black border border-[#2a2a2a] text-zinc-300 text-xs font-mono rounded transition-all duration-200"
              >
                Execute
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
