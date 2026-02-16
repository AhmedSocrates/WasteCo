export function OrganicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing organic shapes with gradients */}
      <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 opacity-20">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <path
            d="M400,100 Q600,200 500,400 T400,700 Q200,600 300,400 T400,100"
            fill="url(#gradient1)"
            className="animate-pulse"
            style={{ animationDuration: '8s' }}
          />
        </svg>
      </div>

      <div className="absolute -bottom-1/4 -right-1/4 w-2/3 h-2/3 opacity-15">
        <svg viewBox="0 0 600 600" className="w-full h-full">
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="300" rx="250" ry="200" fill="url(#gradient2)" className="animate-pulse" style={{ animationDuration: '10s' }} />
        </svg>
      </div>

      <div className="absolute top-1/3 right-1/4 w-1/2 h-1/2 opacity-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="150" fill="url(#gradient3)" className="animate-pulse" style={{ animationDuration: '12s' }} />
        </svg>
      </div>
    </div>
  );
}
