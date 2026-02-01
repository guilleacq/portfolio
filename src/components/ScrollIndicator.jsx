import { useScrollProgress } from '../hooks/useScrollProgress';

/**
 * Visual scroll progress indicator fixed at the top of the viewport
 */
const ScrollIndicator = () => {
  const progress = useScrollProgress();

  return (
    <div 
      className="scroll-indicator" 
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
};

export default ScrollIndicator;
