import { useId } from "react";

type SealArtProps = {
  topText: string;
  bottomText: string;
};

function SealArt({ topText, bottomText }: SealArtProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const ids = {
    innerBg: `${uid}-inner-bg`,
    wave: `${uid}-wave`,
    topArc: `${uid}-top-arc`,
    bottomArc: `${uid}-bottom-arc`,
  };

  return (
    <>
      <defs>
        <linearGradient id={ids.innerBg} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id={ids.wave} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <path id={ids.topArc} d="M 33,95 A 67,67 0 0,1 167,95" fill="none" />
        <path id={ids.bottomArc} d="M 33,95 A 67,67 0 0,0 167,95" fill="none" />
      </defs>

      <circle cx="100" cy="95" r="82" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
      <circle cx="100" cy="95" r="79" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
      <circle cx="100" cy="95" r="49" fill={`url(#${ids.innerBg})`} stroke="#0F172A" strokeWidth="2" />
      <circle cx="100" cy="95" r="46" fill="none" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.4" />

      <text className="font-heading" fontSize="8.5" fontWeight="800" letterSpacing="1" fill="#0F172A">
        <textPath href={`#${ids.topArc}`} startOffset="50%" textAnchor="middle">
          {topText}
        </textPath>
      </text>
      <text className="font-heading" fontSize="9.5" fontWeight="800" letterSpacing="2.5" fill="#059669">
        <textPath href={`#${ids.bottomArc}`} startOffset="50%" textAnchor="middle">
          {bottomText}
        </textPath>
      </text>

      <circle cx="33" cy="95" r="2.8" fill="#0284C7" />
      <circle cx="167" cy="95" r="2.8" fill="#0284C7" />

      <g transform="translate(100, 94) scale(0.33)">
        <path
          d="M 0,-76 L 66,-18 L 48,-18 L 48,26 L -48,26 L -48,-18 L -66,-18 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <g fill="#38BDF8">
          <rect x="-23" y="-12" width="19" height="15" rx="2" />
          <rect x="4" y="-12" width="19" height="15" rx="2" />
          <rect x="-23" y="7" width="19" height="15" rx="2" />
          <rect x="4" y="7" width="19" height="15" rx="2" />
        </g>
        <path
          d="M -66,32 C -45,70 0,80 0,80 C 0,80 45,70 66,32 C 42,56 0,60 0,60 C 0,60 -42,56 -66,32 Z"
          fill={`url(#${ids.wave})`}
        />
        <path d="M 0,-112 Q 0,-92 16,-92 Q 0,-92 0,-72 Q 0,-92 -16,-92 Q 0,-112 0,-112 Z" fill="#38BDF8" />
        <circle cx="54" cy="-74" r="4.5" fill="#67E8F9" />
      </g>
    </>
  );
}

type SealProps = {
  className?: string;
  topText?: string;
  bottomText?: string;
  title?: string;
};

export function Seal({
  className,
  topText = "CLEAN SPACES • SMART SOLUTIONS",
  bottomText = "BETTER LIVING",
  title = "Pristine Clean & Solutions seal",
}: SealProps) {
  return (
    <svg viewBox="16 11 168 168" className={className} role="img" aria-label={title}>
      <SealArt topText={topText} bottomText={bottomText} />
    </svg>
  );
}

export function LogoLockup({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 740 190" className={className} role="img" aria-label="Pristine Clean & Solutions">
      <SealArt topText="CLEAN SPACES • SMART SOLUTIONS" bottomText="BETTER LIVING" />

      <line x1="205" y1="25" x2="205" y2="165" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />

      <g transform="translate(230, 0)">
        <text x="0" y="62" className="font-brand" fontSize="36" fontWeight="700" letterSpacing="3" fill="#0F172A">
          PRISTINE CLEAN
        </text>
        <text x="2" y="98" className="font-heading" fontSize="19" fontWeight="800" letterSpacing="5" fill="#0284C7">
          &amp; SOLUTIONS
        </text>
        <text x="2" y="130" className="font-heading" fontSize="13" fontWeight="700" letterSpacing="3.5" fill="#059669">
          PREMIUM PROPERTY CARE
        </text>
        <text x="3" y="158" className="font-heading" fontSize="10.5" fontWeight="600" letterSpacing="2.8" fill="#64748B">
          LICENSED • BONDED • INSURED
        </text>
      </g>
    </svg>
  );
}
