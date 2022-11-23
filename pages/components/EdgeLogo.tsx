export default function logo({ styling }: { styling: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Edge"
      role="img"
      viewBox="0 0 512 512"
      width="50"
      height="250"
      className={styling}
    >
      <rect width="512" height="512" rx="15%" fill="#fff" />
      <radialGradient id="a" cx=".6" cy=".5">
        <stop offset=".8" stopColor="#148" />
        <stop offset="1" stopColor="#137" />
      </radialGradient>
      <radialGradient id="b" cx=".5" cy=".6" fx=".2" fy=".6">
        <stop offset=".8" stopColor="#38c" />
        <stop offset="1" stopColor="#269" />
      </radialGradient>
      <linearGradient id="c" y1=".5" y2="1">
        <stop offset=".1" stopColor="#5ad" />
        <stop offset=".6" stopColor="#5c8" />
        <stop offset=".8" stopColor="#7d5" />
      </linearGradient>
      <path
        d="M439 374c-50 77-131 98-163 96-191-9-162-262-47-261-82 52 30 224 195 157 17-12 20 3 15 8"
        fill="url(#a)"
      />
      <path
        d="M311 255c18-82-31-135-129-135S38 212 38 259c0 124 125 253 287 203-134 39-214-116-146-210 46-66 123-68 132 3 M411 99h1"
        fill="url(#b)"
      />
      <path
        d="M39 253C51-15 419-30 472 202c14 107-86 149-166 115-42-26 26-20-3-99-48-112-251-103-264 35"
        fill="url(#c)"
      />
    </svg>
  );
}
