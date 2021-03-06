import React from "react";

export default function RatingActiveIcon({ style, ...rest }) {
  return (
    <svg {...rest} width="18px" height="18px" viewBox="0 0 18 18" style={style}>
      <defs>
        <linearGradient
          x1="50%"
          y1="11.2107104%"
          x2="50%"
          y2="89.810197%"
          id="linearGradient-1"
        >
          <stop stopColor="#FEE939" offset="0%" />
          <stop stopColor="#FFD02E" offset="100%" />
        </linearGradient>
        <path
          d="M9.00008046,14.2591568 L5.69318271,16.0758701 C4.72290804,16.6089108 4.0801056,16.1568826 4.25609762,15.074513 L4.89660485,11.1353255 L2.20282974,8.37793086 C1.43181517,7.58870707 1.69072323,6.81328124 2.78540144,6.6453114 L6.46399306,6.08086016 L8.14854498,2.51445393 C8.61883504,1.5187913 9.38525755,1.52711513 9.85161595,2.51445393 L11.5361679,6.08086016 L15.2147595,6.6453114 C16.3075195,6.81298691 16.5722209,7.58474045 15.7973312,8.37793086 L13.1035561,11.1353255 L13.7440633,15.074513 C13.9206578,16.1605879 13.2726073,16.6063586 12.3069782,16.0758701 L9.00008046,14.2591568 Z"
          id="path-2"
        />
        <filter
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
          id="filter-3"
        >
          <feGaussianBlur
            stdDeviation="1"
            in="SourceAlpha"
            result="shadowBlurInner1"
          />
          <feOffset
            dx="0"
            dy="1"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.12 0"
            type="matrix"
            in="shadowInnerInner1"
          />
        </filter>
      </defs>
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="ico-star-active-sm">
          <g id="ico-star-active">
            <rect
              id="Rectangle-2"
              fill="#D8D8D8"
              opacity="0"
              x="0"
              y="0"
              width="18"
              height="18"
            />
            <g id="Star">
              <use
                fill="url(#linearGradient-1)"
                fillRule="evenodd"
                xlinkHref="#path-2"
              />
              <use
                fill="black"
                fillOpacity="1"
                filter="url(#filter-3)"
                xlinkHref="#path-2"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
