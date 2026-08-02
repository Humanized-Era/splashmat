import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconBroom(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3 6 21" />
      <path d="M14 3l3 1-6.5 17-3-1" />
      <path d="M4.5 21h5" />
      <path d="M9 8l6 2" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4C10 4 4 10 4 18c0 1 0 2 .5 2S6 19 7 18c8-1 13-6 13-14Z" />
      <path d="M6 20c2-6 6-10 12-12" />
    </svg>
  );
}

export function IconScent(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3c1.5 1.5 1.5 3-.5 4.5" />
      <path d="M12 3c1.5 1.5 1.5 3-.5 4.5" />
      <path d="M16 3c1.5 1.5 1.5 3-.5 4.5" />
      <rect x="6" y="9" width="12" height="12" rx="3" />
      <path d="M6 14h12" />
    </svg>
  );
}

export function IconDissolve(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="10" r="6" strokeDasharray="2 3" />
      <path d="M6 18c1 1 2 2 2 3M11 19c1 1 1 2 1 3M16 18c1 1 1.5 2 1.5 3" />
    </svg>
  );
}

export function IconNoWaste(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M9 7V4h6v3" />
      <path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" />
      <path d="M4 20 20 4" opacity="0.5" />
    </svg>
  );
}

export function IconTimer(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l3 2" />
      <path d="M9 2h6" />
    </svg>
  );
}

export function IconDroplet(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c4 5 7 8.5 7 12.5A7 7 0 1 1 5 15.5C5 11.5 8 8 12 3Z" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconHome(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function IconRestaurant(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3v8a2 2 0 0 0 4 0V3" />
      <path d="M9 11v10" />
      <path d="M17 3c-2 0-3 2-3 5s1 4 3 4v9" />
    </svg>
  );
}

export function IconHotel(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V7l9-4 9 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 11h.01M15 11h.01M12 11h.01" />
    </svg>
  );
}

export function IconCamping(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20 12 5l9 15" />
      <path d="M8 20l4-7 4 7" />
    </svg>
  );
}

export function IconOffice(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2M10 21v-4h4v4" />
    </svg>
  );
}

export function IconSchool(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 9 12 4l10 5-10 5-10-5Z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </svg>
  );
}

export function IconCare(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-4.4-9.5-9C.9 8.4 3 5 6.5 5c2 0 3.5 1.2 4.5 2.6C12 6.2 13.5 5 15.5 5 19 5 21.1 8.4 21.5 12c-2.5 4.6-9.5 9-9.5 9Z" />
      <path d="M9 11h6M12 8v6" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5-4.8-4.6 6.6-.9Z" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}
