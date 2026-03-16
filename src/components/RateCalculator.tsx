import { useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, CalendarDays, Users, BedDouble, Sparkles, Info } from "lucide-react";

type SuiteType = "luxury" | "pool";
type Special = "none" | "pay_stay" | "honeymoon";

const RATES: Record<SuiteType, { label: string; periods: { start: string; end: string; rate: number }[] }> = {
  luxury: {
    label: "Luxury Suite",
    periods: [
      { start: "2026-01-01", end: "2026-03-31", rate: 21000 },
      { start: "2026-04-01", end: "2027-03-31", rate: 31000 },
    ],
  },
  pool: {
    label: "Luxury Pool Suite",
    periods: [
      { start: "2026-01-01", end: "2026-03-31", rate: 23000 },
      { start: "2026-04-01", end: "2027-03-31", rate: 33000 },
    ],
  },
};

const CONSERVATION_LEVY = 660; // per person per night

const PAY_STAY_VALID_RANGES = [
  { start: "2026-01-05", end: "2026-03-31" },
  { start: "2026-11-01", end: "2026-12-19" },
  { start: "2027-01-10", end: "2027-03-31" },
];

function isDateInRange(dateStr: string, start: string, end: string) {
  return dateStr >= start && dateStr <= end;
}

function isPayStayEligible(checkIn: string) {
  return PAY_STAY_VALID_RANGES.some((r) => isDateInRange(checkIn, r.start, r.end));
}

function getRateForDate(suiteType: SuiteType, dateStr: string): number {
  const suite = RATES[suiteType];
  for (const period of suite.periods) {
    if (isDateInRange(dateStr, period.start, period.end)) return period.rate;
  }
  return suite.periods[suite.periods.length - 1].rate;
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

function formatZAR(amount: number): string {
  return new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR", maximumFractionDigits: 0 }).format(amount);
}

const RateCalculator = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [suiteType, setSuiteType] = useState<SuiteType>("luxury");
  const [checkIn, setCheckIn] = useState("2026-06-15");
  const [nights, setNights] = useState(3);
  const [adults, setAdults] = useState(2);
  const [singleOccupancy, setSingleOccupancy] = useState(false);
  const [thirdPerson, setThirdPerson] = useState(false);
  const [special, setSpecial] = useState<Special>("none");

  const payStayEligible = isPayStayEligible(checkIn);
  const honeymoonEligible = adults === 2 && nights >= 2;

  // Reset special if no longer eligible
  const activeSpecial = special === "pay_stay" && !payStayEligible ? "none"
    : special === "honeymoon" && !honeymoonEligible ? "none"
    : special;

  const breakdown = useMemo(() => {
    const pax = singleOccupancy ? 1 : adults;
    const thirdCount = thirdPerson && suiteType === "luxury" && !singleOccupancy ? 1 : 0;
    const totalPax = pax + thirdCount;

    // Calculate nightly rates per night
    let nightlyRates: number[] = [];
    for (let i = 0; i < nights; i++) {
      const date = addDays(checkIn, i);
      const baseRate = getRateForDate(suiteType, date);
      nightlyRates.push(baseRate);
    }

    // Apply single supplement (50% extra)
    const singleMultiplier = singleOccupancy ? 1.5 : 1;

    // Calculate accommodation per adult
    let accommodationPerAdult = nightlyRates.reduce((sum, r) => sum + r, 0) * singleMultiplier;

    // Pay-Stay: stay 4 pay 3 (free cheapest night)
    let freeNightDiscount = 0;
    if (activeSpecial === "pay_stay" && nights >= 4) {
      const freeNights = Math.floor(nights / 4);
      const sorted = [...nightlyRates].sort((a, b) => a - b);
      for (let i = 0; i < freeNights; i++) {
        freeNightDiscount += sorted[i] * singleMultiplier;
      }
    }

    // Honeymoon: 50% off partner
    let honeymoonDiscount = 0;
    if (activeSpecial === "honeymoon" && adults === 2 && !singleOccupancy) {
      honeymoonDiscount = nightlyRates.reduce((sum, r) => sum + r, 0) * 0.5;
    }

    // Total accommodation
    const totalAdultAccom = singleOccupancy
      ? accommodationPerAdult - freeNightDiscount
      : accommodationPerAdult * pax - freeNightDiscount * pax - honeymoonDiscount;

    // Third person (50% of sharing rate)
    const thirdPersonAccom = thirdCount > 0
      ? nightlyRates.reduce((sum, r) => sum + r * 0.5, 0)
      : 0;

    const totalAccommodation = totalAdultAccom + thirdPersonAccom;

    // Conservation levy
    const totalLevy = CONSERVATION_LEVY * totalPax * nights;

    const grandTotal = totalAccommodation + totalLevy;

    const avgNightlyRate = nightlyRates.length > 0 ? nightlyRates.reduce((a, b) => a + b, 0) / nightlyRates.length : 0;

    return {
      avgNightlyRate,
      totalAccommodation,
      totalLevy,
      freeNightDiscount: freeNightDiscount * (singleOccupancy ? 1 : pax),
      honeymoonDiscount,
      grandTotal,
      totalPax,
      pax,
      thirdCount,
    };
  }, [suiteType, checkIn, nights, adults, singleOccupancy, thirdPerson, activeSpecial]);

  return (
    <section id="rates" className="section-padding bg-muted" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-xs tracking-safari uppercase font-body mb-4">
            Plan Your Stay
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Rate Calculator
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6 mb-6" />
          <p className="font-body text-muted-foreground text-sm max-w-xl mx-auto tracking-wide">
            All rates are per person per night sharing, quoted in South African Rand (ZAR) inclusive of 15% VAT
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          {/* Input Panel */}
          <div className="lg:col-span-3 bg-background p-8 md:p-10 space-y-8">
            {/* Suite Type */}
            <div>
              <label className="flex items-center gap-2 text-xs tracking-safari uppercase font-body text-muted-foreground mb-4">
                <BedDouble size={14} className="text-gold" /> Suite Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(["luxury", "pool"] as SuiteType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSuiteType(type);
                      if (type === "pool") setThirdPerson(false);
                    }}
                    className={`py-4 px-4 text-center font-body text-sm tracking-wide transition-all duration-300 border ${
                      suiteType === type
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-foreground border-border hover:border-gold"
                    }`}
                  >
                    <span className="block font-medium">{RATES[type].label}</span>
                    <span className="block text-[10px] mt-1 opacity-70 tracking-widest uppercase">
                      From {formatZAR(RATES[type].periods[0].rate)} pppn
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Nights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-xs tracking-safari uppercase font-body text-muted-foreground mb-3">
                  <CalendarDays size={14} className="text-gold" /> Check-in Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min="2026-01-01"
                  max="2027-03-31"
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent border border-border py-3 px-4 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-xs tracking-safari uppercase font-body text-muted-foreground mb-3">
                  <CalendarDays size={14} className="text-gold" /> Number of Nights
                </label>
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setNights(Math.max(1, nights - 1))}
                    className="px-4 py-3 text-foreground hover:text-gold transition-colors font-body text-lg"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center font-body text-sm text-foreground">
                    {nights} {nights === 1 ? "night" : "nights"}
                  </span>
                  <button
                    onClick={() => setNights(Math.min(30, nights + 1))}
                    className="px-4 py-3 text-foreground hover:text-gold transition-colors font-body text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="flex items-center gap-2 text-xs tracking-safari uppercase font-body text-muted-foreground mb-3">
                <Users size={14} className="text-gold" /> Guests
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => {
                      setAdults(Math.max(1, adults - 1));
                      if (adults - 1 === 1) setSingleOccupancy(true);
                      else setSingleOccupancy(false);
                    }}
                    className="px-4 py-3 text-foreground hover:text-gold transition-colors font-body text-lg"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center font-body text-sm text-foreground">
                    {adults} {adults === 1 ? "Adult" : "Adults"}
                  </span>
                  <button
                    onClick={() => {
                      setAdults(Math.min(2, adults + 1));
                      if (adults + 1 > 1) setSingleOccupancy(false);
                    }}
                    className="px-4 py-3 text-foreground hover:text-gold transition-colors font-body text-lg"
                  >
                    +
                  </button>
                </div>

                {suiteType === "luxury" && !singleOccupancy && (
                  <label className="flex items-center gap-3 px-4 py-3 border border-border cursor-pointer hover:border-gold transition-colors">
                    <input
                      type="checkbox"
                      checked={thirdPerson}
                      onChange={(e) => setThirdPerson(e.target.checked)}
                      className="accent-gold"
                    />
                    <span className="font-body text-sm text-foreground">
                      Third person (12–18 yrs)
                    </span>
                  </label>
                )}
              </div>
              {singleOccupancy && (
                <p className="text-xs text-muted-foreground font-body mt-2 flex items-center gap-1.5">
                  <Info size={12} className="text-gold" />
                  50% single supplement applies
                </p>
              )}
            </div>

            {/* Specials */}
            <div>
              <label className="flex items-center gap-2 text-xs tracking-safari uppercase font-body text-muted-foreground mb-3">
                <Sparkles size={14} className="text-gold" /> Available Specials
              </label>
              <div className="space-y-3">
                <label
                  className={`flex items-start gap-3 p-4 border cursor-pointer transition-all duration-300 ${
                    activeSpecial === "pay_stay"
                      ? "border-gold bg-gold/5"
                      : payStayEligible && nights >= 4
                      ? "border-border hover:border-gold"
                      : "border-border opacity-40 cursor-not-allowed"
                  }`}
                >
                  <input
                    type="radio"
                    name="special"
                    checked={activeSpecial === "pay_stay"}
                    disabled={!payStayEligible || nights < 4}
                    onChange={() => setSpecial("pay_stay")}
                    className="accent-gold mt-0.5"
                  />
                  <div>
                    <p className="font-body text-sm text-foreground font-medium">
                      Pay-Stay Special — Stay 4, Pay 3
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      {!payStayEligible
                        ? "Not available for selected dates"
                        : nights < 4
                        ? "Minimum 4 nights required"
                        : "1 free night for every 4 nights booked"}
                    </p>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-3 p-4 border cursor-pointer transition-all duration-300 ${
                    activeSpecial === "honeymoon"
                      ? "border-gold bg-gold/5"
                      : honeymoonEligible
                      ? "border-border hover:border-gold"
                      : "border-border opacity-40 cursor-not-allowed"
                  }`}
                >
                  <input
                    type="radio"
                    name="special"
                    checked={activeSpecial === "honeymoon"}
                    disabled={!honeymoonEligible}
                    onChange={() => setSpecial("honeymoon")}
                    className="accent-gold mt-0.5"
                  />
                  <div>
                    <p className="font-body text-sm text-foreground font-medium">
                      Honeymoon Special — 50% Off Partner
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      {!honeymoonEligible
                        ? "Requires 2 adults, minimum 2 nights"
                        : "Includes MCC, private dinner & spa treatments"}
                    </p>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-3 p-4 border cursor-pointer transition-all duration-300 ${
                    activeSpecial === "none"
                      ? "border-gold bg-gold/5"
                      : "border-border hover:border-gold"
                  }`}
                >
                  <input
                    type="radio"
                    name="special"
                    checked={activeSpecial === "none"}
                    onChange={() => setSpecial("none")}
                    className="accent-gold mt-0.5"
                  />
                  <div>
                    <p className="font-body text-sm text-foreground font-medium">
                      No Special — Standard Rate
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 bg-primary p-8 md:p-10 text-primary-foreground flex flex-col">
            <div className="flex items-center gap-2 mb-8">
              <Calculator size={18} className="text-gold" />
              <h3 className="font-display text-xl text-primary-foreground">
                Estimate
              </h3>
            </div>

            <div className="space-y-5 flex-1">
              {/* Summary */}
              <div className="border-b border-primary-foreground/10 pb-5">
                <p className="font-display text-lg text-primary-foreground">
                  {RATES[suiteType].label}
                </p>
                <p className="text-primary-foreground/60 text-xs font-body mt-1 tracking-wide">
                  {nights} {nights === 1 ? "night" : "nights"} · {breakdown.pax} {breakdown.pax === 1 ? "adult" : "adults"}
                  {breakdown.thirdCount > 0 ? " · 1 youth" : ""}
                </p>
              </div>

              {/* Line items */}
              <div className="space-y-3 text-sm font-body">
                <div className="flex justify-between">
                  <span className="text-primary-foreground/70">Avg. nightly rate (pppn)</span>
                  <span>{formatZAR(breakdown.avgNightlyRate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-foreground/70">Accommodation</span>
                  <span>{formatZAR(breakdown.totalAccommodation + breakdown.freeNightDiscount + breakdown.honeymoonDiscount)}</span>
                </div>

                {breakdown.freeNightDiscount > 0 && (
                  <div className="flex justify-between text-gold">
                    <span>Pay-Stay Discount</span>
                    <span>−{formatZAR(breakdown.freeNightDiscount)}</span>
                  </div>
                )}

                {breakdown.honeymoonDiscount > 0 && (
                  <div className="flex justify-between text-gold">
                    <span>Honeymoon Discount</span>
                    <span>−{formatZAR(breakdown.honeymoonDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-primary-foreground/70">
                    Conservation Levy
                    <span className="block text-[10px] text-primary-foreground/40">
                      R{CONSERVATION_LEVY} × {breakdown.totalPax} pax × {nights} nights
                    </span>
                  </span>
                  <span>{formatZAR(breakdown.totalLevy)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-primary-foreground/10 pt-5 mt-auto">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] tracking-safari uppercase text-primary-foreground/50 font-body">
                      Estimated Total
                    </p>
                  </div>
                  <p className="font-display text-3xl text-gold">
                    {formatZAR(breakdown.grandTotal)}
                  </p>
                </div>
                <p className="text-[10px] text-primary-foreground/40 font-body mt-3 tracking-wide">
                  20% deposit required: {formatZAR(breakdown.grandTotal * 0.2)}
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-8 block w-full text-center py-3.5 border border-gold text-gold text-xs tracking-safari uppercase font-body font-medium hover:bg-gold hover:text-primary transition-all duration-500"
            >
              Enquire Now
            </a>

            {/* Disclaimers */}
            <div className="mt-6 space-y-1.5">
              <p className="text-[10px] text-primary-foreground/30 font-body leading-relaxed">
                • Rates are subject to change and availability
              </p>
              <p className="text-[10px] text-primary-foreground/30 font-body leading-relaxed">
                • Specials may not be combined with other offers
              </p>
              <p className="text-[10px] text-primary-foreground/30 font-body leading-relaxed">
                • Maximum 16 guests at any given time
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RateCalculator;
