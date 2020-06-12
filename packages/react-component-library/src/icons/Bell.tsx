import React from 'react'

export const Bell: React.FC<ComponentWithClass> = ({ className = '' }) => (
  <svg
    className={className}
    width="16px"
    height="21px"
    viewBox="0 0 16 21"
    version="1.1"
  >
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g
        id="Desktop-HD"
        transform="translate(-22.000000, -713.000000)"
        className="rn-iconfill"
      >
        <g id="Group-6" transform="translate(22.000000, 707.000000)">
          <path d="M5.08164777,23.791767 L10.1642024,23.791767 C10.1642024,25.1951874 9.02634548,26.3330443 7.62292508,26.3330443 C6.21950468,26.3330443 5.08164777,25.1951874 5.08164777,23.791767 Z M7.72467147,6.00282579 C7.20228015,5.97428725 6.68979982,6.16289767 6.31010122,6.52397824 C5.93040262,6.8838231 5.71572822,7.38512182 5.71696709,7.90878378 L5.71696709,8.86176277 C4.60020278,9.2563596 3.63480329,9.98846983 2.9511044,10.9550764 C2.26864438,11.9229537 1.90257338,13.0781866 1.90505112,14.2619135 L1.90505112,15.8502118 C1.90505112,16.8602743 1.50425993,17.8293904 0.789525681,18.5441246 L0.52646536,18.807185 C-0.00958532305,19.3444745 -0.151039172,20.1597163 0.170337111,20.8471636 C0.486754726,21.4936645 1.14812532,21.8981723 1.86657619,21.8857518 L13.4487652,21.8857518 C14.4414517,21.8857518 15.2467824,21.080421 15.2467824,20.0877346 L15.2467824,20.0083197 C15.2467824,19.5802097 15.0929144,19.1645521 14.8149559,18.8394274 L14.2590515,18.2041081 C13.6634396,17.5104664 13.3383467,16.6244819 13.3408244,15.7099715 L13.3408244,14.2618881 C13.3433054,13.0780976 12.977263,11.9228647 12.2947712,10.955051 C11.6110723,9.98841265 10.6456728,9.25630243 9.52890848,8.86173736 L9.52890848,8.01669912 C9.55124313,6.9756331 8.76204628,6.09460402 7.72469688,6.00280038 L7.72467147,6.00282579 Z" />
        </g>
      </g>
    </g>
  </svg>
)

Bell.displayName = 'BellIcon'
