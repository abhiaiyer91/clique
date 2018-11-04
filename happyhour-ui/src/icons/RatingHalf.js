import React from "react";

export default function RatingStarHalfIcon({ style, ...rest }) {
  return (
    <svg {...rest} width="18px" height="18px" viewBox="0 0 18 18" style={style}>
      <defs>
        <path
          d="M8.99656767,14.2591568 L5.68966992,16.0758701 C4.71939524,16.6089108 4.07659281,16.1568826 4.25258483,15.074513 L4.89309205,11.1353255 L2.19931694,8.37793086 C1.42830238,7.58870707 1.68721044,6.81328124 2.78188865,6.6453114 L6.46048027,6.08086016 L8.14503219,2.51445393 C8.61532225,1.5187913 9.38174476,1.52711513 9.84810315,2.51445393 L11.5326551,6.08086016 L15.2112467,6.6453114 C16.3040067,6.81298691 16.5687081,7.58474045 15.7938184,8.37793086 L13.1000433,11.1353255 L13.7405505,15.074513 C13.917145,16.1605879 13.2690945,16.6063586 12.3034654,16.0758701 L8.99656767,14.2591568 Z"
          id="path-1"
        />
        <linearGradient
          x1="50%"
          y1="11.2107104%"
          x2="50%"
          y2="89.810197%"
          id="linearGradient-3"
        >
          <stop stopColor="#FEE939" offset="0%" />
          <stop stopColor="#FFD02E" offset="100%" />
        </linearGradient>
        <path
          d="M9.00008046,14.2591568 L5.69318271,16.0758701 C4.72290804,16.6089108 4.0801056,16.1568826 4.25609762,15.074513 L4.89660485,11.1353255 L2.20282974,8.37793086 C1.43181517,7.58870707 1.69072323,6.81328124 2.78540144,6.6453114 L6.46399306,6.08086016 L9.00008046,0.711647258 L9.00008046,14.2591568 Z"
          id="path-4"
        />
        <filter
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
          id="filter-5"
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
        <g id="ico-star-active-half-sm">
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
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1" />
            </mask>
            <use
              id="Star"
              fillOpacity="0.12"
              fill="#000000"
              xlinkHref="#path-1"
            />
            <g id="Star-Copy" mask="url(#mask-2)">
              <use
                fill="url(#linearGradient-3)"
                fillRule="evenodd"
                xlinkHref="#path-4"
              />
              <use
                fill="black"
                fillOpacity="1"
                filter="url(#filter-5)"
                xlinkHref="#path-4"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
