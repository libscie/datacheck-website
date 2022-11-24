export default function logo({ styling }: { styling: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Safari"
      role="img"
      width="50"
      height="250"
      viewBox="0 0 512 512"
      className={styling}
    >
      <rect width="512" height="512" rx="15%" fill="#fff" />
      <radialGradient id="a">
        <stop stopColor="#0bd" offset="0" />
        <stop offset="1" stopColor="#17d" />
      </radialGradient>
      <g transform="matrix(4 0 0 4 256 256)">
        <g stroke="#eee" fill="none">
          <circle r="52.5" fill="url(#a)" strokeWidth="5" />
          <circle
            r="45"
            strokeDasharray="1.25 8.175"
            strokeDashoffset=".5"
            strokeWidth="5.5"
          />
          <circle
            r="42.5"
            strokeDasharray="1.25 7.65"
            strokeDashoffset="5"
            strokeWidth="10"
          />
        </g>
        <path d="M6 6l-12-12l-29 39" fill="#eee" />
        <path d="M6 6l-12-12l41-28" fill="#f55" />
        <path opacity=".3" d="M-35 33l7-5-3 5 37-27 28-35-4 2 4-6" />
      </g>
    </svg>
  );
}
