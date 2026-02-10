/**
 * Global Loading State
 * Displays during route transitions
 * Uses existing global CSS and design tokens only
 */
export default function Loading() {
  return (
    <div className="loading-page">
      <div className="loading-container">
        <div className="loading-spinner" />
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
}
