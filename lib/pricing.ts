export type ServiceType = "residential" | "deep" | "commercial" | "movein";
export type Frequency = "weekly" | "biweekly" | "onetime";

export const serviceOptions: {
  id: ServiceType;
  icon: string;
  label: string;
  caption: string;
}[] = [
  { id: "residential", icon: "home", label: "Home Care", caption: "Recurring routine" },
  { id: "deep", icon: "cleaning_services", label: "Deep Clean", caption: "Intensive overhaul" },
  { id: "commercial", icon: "business", label: "Commercial", caption: "Office & clinics" },
  { id: "movein", icon: "local_shipping", label: "Move In/Out", caption: "Full reset blank slate" },
];

export const frequencyOptions: {
  id: Frequency;
  label: string;
  caption: string;
  discount: number;
  badge: string;
}[] = [
  { id: "weekly", label: "Weekly", caption: "Optimal pristine purity", discount: 0.2, badge: "Save 20%" },
  { id: "biweekly", label: "Bi-Weekly", caption: "Most popular choice", discount: 0.15, badge: "Save 15%" },
  { id: "onetime", label: "One-Time / Reset", caption: "Deep periodic cadence", discount: 0.05, badge: "Standard" },
];

const serviceRates: Record<ServiceType, { base: number; perBed: number; perBath: number; perSqft: number }> = {
  residential: { base: 95, perBed: 20, perBath: 25, perSqft: 0.04 },
  deep: { base: 160, perBed: 35, perBath: 40, perSqft: 0.07 },
  commercial: { base: 220, perBed: 10, perBath: 30, perSqft: 0.08 },
  movein: { base: 240, perBed: 40, perBath: 45, perSqft: 0.09 },
};

export const ROOM_MIN = 1;
export const ROOM_MAX = 10;
export const SQFT_MIN = 600;
export const SQFT_MAX = 6000;
export const SQFT_STEP = 50;

export function estimatePrice(input: {
  service: ServiceType;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  discount: number;
}) {
  const rates = serviceRates[input.service];
  const raw =
    rates.base +
    input.bedrooms * rates.perBed +
    input.bathrooms * rates.perBath +
    input.sqft * rates.perSqft;

  return {
    original: Math.round(raw),
    final: Math.round(raw * (1 - input.discount)),
  };
}
