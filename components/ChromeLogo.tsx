export default function logo({ styling }: { styling: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Chrome"
      role="img"
      width="50"
      height="250"
      viewBox="0 0 512 512"
      className={styling}
    >
      <path d="M256 140h228A256 256 0 0 1 244 511.7" fill="#fc4" />
      <path d="M357 314 244 511.7A256 256 0 0 1 40 118" fill="#0f9d58" />
      <path d="M256 140h228A256 256 1 0 0 40 118L155 314" fill="#db4437" />
      <circle
        cx="256"
        cy="256"
        r="105"
        fill="#4285f4"
        stroke="#f1f1f1"
        strokeWidth="24"
      />
    </svg>
  );
}