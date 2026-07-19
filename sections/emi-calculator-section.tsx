"use client";

import { useId, useMemo, useState } from "react";

import { motion, useReducedMotion } from "framer-motion";

import { staggerChild, staggerContainer } from "@/animations";
import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { Container } from "@/components/ui/container";
import type { EmiCalculatorContent } from "@/lib/content/types";
import { calculateEmi, formatInr, formatInrCompact } from "@/lib/finance/emi";
import { cn } from "@/lib/cn";

type SliderFieldProps = {
  id: string;
  label: string;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (next: number) => void;
};

function SliderField({
  id,
  label,
  valueLabel,
  min,
  max,
  step,
  value,
  onChange,
}: SliderFieldProps) {
  const pct = max === min ? 0 : ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between gap-4">
        <label
          htmlFor={id}
          className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#C9A227]/90"
        >
          {label}
        </label>
        <span className="font-display text-[1.15rem] font-semibold tabular-nums tracking-[-0.02em] text-[#FAF7EF] sm:text-[1.25rem]">
          {valueLabel}
        </span>
      </div>
      <div className="relative pt-1">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#2A2118]" />
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#A8841A] to-[#E8C65A]"
          style={{ width: `${pct}%` }}
        />
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={cn(
            "emi-range relative z-[1] w-full cursor-pointer appearance-none bg-transparent",
            "[&::-webkit-slider-runnable-track]:h-[3px] [&::-webkit-slider-runnable-track]:bg-transparent",
            "[&::-moz-range-track]:h-[3px] [&::-moz-range-track]:bg-transparent",
            "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5",
            "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0c0906]",
            "[&::-webkit-slider-thumb]:bg-[#E8C65A] [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(201,162,39,0.22)]",
            "[&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200",
            "[&::-webkit-slider-thumb]:hover:scale-110",
            "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full",
            "[&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0c0906]",
            "[&::-moz-range-thumb]:bg-[#E8C65A] [&::-moz-range-thumb]:shadow-[0_0_0_4px_rgba(201,162,39,0.22)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14100C]",
          )}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={valueLabel}
        />
      </div>
    </div>
  );
}

function BreakdownRing({
  principalShare,
  interestShare,
  reduceMotion,
}: {
  principalShare: number;
  interestShare: number;
  reduceMotion: boolean | null;
}) {
  const size = 168;
  const stroke = 14;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const principalLen = circumference * principalShare;
  const interestLen = circumference * interestShare;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="-rotate-90"
      aria-hidden
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#2A2118"
        strokeWidth={stroke}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#E8C65A"
        strokeWidth={stroke}
        strokeLinecap="butt"
        strokeDasharray={`${principalLen} ${circumference - principalLen}`}
        initial={reduceMotion ? false : { strokeDasharray: `0 ${circumference}` }}
        animate={{ strokeDasharray: `${principalLen} ${circumference - principalLen}` }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#8B6914"
        strokeWidth={stroke}
        strokeLinecap="butt"
        strokeDasharray={`${interestLen} ${circumference - interestLen}`}
        strokeDashoffset={-principalLen}
        initial={reduceMotion ? false : { strokeDasharray: `0 ${circumference}` }}
        animate={{
          strokeDasharray: `${interestLen} ${circumference - interestLen}`,
          strokeDashoffset: -principalLen,
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      />
    </svg>
  );
}

/** Interactive home-loan EMI planner — live sliders + principal / interest breakdown. */
export function EmiCalculatorSection({ content }: { content: EmiCalculatorContent }) {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const { heading, defaults, ranges, ctaLabel, disclaimer } = content;

  const [propertyPrice, setPropertyPrice] = useState(defaults.propertyPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(defaults.downPaymentPercent);
  const [interestRate, setInterestRate] = useState(defaults.interestRatePercent);
  const [tenureYears, setTenureYears] = useState(defaults.tenureYears);

  const loanAmount = Math.max(0, propertyPrice * (1 - downPaymentPercent / 100));
  const downPayment = propertyPrice - loanAmount;

  const result = useMemo(
    () =>
      calculateEmi({
        principal: loanAmount,
        annualRatePercent: interestRate,
        tenureYears,
      }),
    [loanAmount, interestRate, tenureYears],
  );

  const total = result.totalPayment || 1;
  const principalShare = Math.min(1, Math.max(0, loanAmount / total));
  const interestShare = Math.min(1, Math.max(0, result.totalInterest / total));

  return (
    <section
      id="emi-calculator"
      aria-labelledby="emi-calculator-heading"
      className="relative scroll-mt-[5.625rem] overflow-hidden border-t border-[#C9A227]/22 bg-[#0c0906] sm:scroll-mt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_0%,rgba(201,162,39,0.14),transparent_55%),radial-gradient(ellipse_70%_50%_at_90%_100%,rgba(139,105,20,0.12),transparent_50%)]"
      />

      <Container className="relative py-section-y">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          variants={reduceMotion ? undefined : staggerContainer}
          className="mb-10 max-w-[40rem] lg:mb-12"
        >
          {heading.eyebrow ? (
            <motion.p
              variants={reduceMotion ? undefined : staggerChild}
              className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.38em] text-[#C9A227]"
            >
              {heading.eyebrow}
            </motion.p>
          ) : null}
          <motion.h2
            id="emi-calculator-heading"
            variants={reduceMotion ? undefined : staggerChild}
            className="mt-4 font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.06] tracking-[-0.022em] text-[#FAF7EF]"
          >
            {heading.title}
          </motion.h2>
          {heading.lead ? (
            <motion.p
              variants={reduceMotion ? undefined : staggerChild}
              className="mt-4 font-sans text-[1rem] font-medium leading-[1.68] text-[#EBE4D6]/[0.88] sm:text-[1.035rem]"
            >
              {heading.lead}
            </motion.p>
          ) : null}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid overflow-hidden rounded-[22px] border border-[#C9A227]/28 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
        >
          {/* Controls */}
          <div className="space-y-8 bg-[#14100C] px-6 py-9 sm:px-10 sm:py-11 lg:px-12">
            <SliderField
              id={`${baseId}-price`}
              label="Property price"
              valueLabel={formatInrCompact(propertyPrice)}
              min={ranges.propertyPrice.min}
              max={ranges.propertyPrice.max}
              step={ranges.propertyPrice.step}
              value={propertyPrice}
              onChange={setPropertyPrice}
            />
            <SliderField
              id={`${baseId}-down`}
              label="Down payment"
              valueLabel={`${downPaymentPercent}% · ${formatInrCompact(downPayment)}`}
              min={ranges.downPaymentPercent.min}
              max={ranges.downPaymentPercent.max}
              step={ranges.downPaymentPercent.step}
              value={downPaymentPercent}
              onChange={setDownPaymentPercent}
            />
            <SliderField
              id={`${baseId}-rate`}
              label="Interest rate"
              valueLabel={`${interestRate.toFixed(2)}% p.a.`}
              min={ranges.interestRatePercent.min}
              max={ranges.interestRatePercent.max}
              step={ranges.interestRatePercent.step}
              value={interestRate}
              onChange={setInterestRate}
            />
            <SliderField
              id={`${baseId}-tenure`}
              label="Tenure"
              valueLabel={`${tenureYears} years`}
              min={ranges.tenureYears.min}
              max={ranges.tenureYears.max}
              step={ranges.tenureYears.step}
              value={tenureYears}
              onChange={setTenureYears}
            />

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#C9A227]/18 pt-6">
              <div>
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#C9A227]/80">
                  Loan amount
                </p>
                <p className="mt-1 font-display text-[1.35rem] font-semibold tabular-nums text-[#FAF7EF]">
                  {formatInrCompact(loanAmount)}
                </p>
              </div>
              <p className="max-w-[14rem] font-sans text-[0.78rem] leading-snug text-[#EBE4D6]/70">
                Loan = price − down payment
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="relative flex flex-col justify-between gap-8 bg-[#1A1510] px-6 py-9 sm:px-10 sm:py-11 lg:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(201,162,39,0.08),transparent_42%)]"
            />

            <div className="relative">
              <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#C9A227]">
                Estimated monthly EMI
              </p>
              <p
                className="mt-3 font-display text-[clamp(2.4rem,6vw,3.55rem)] font-semibold leading-none tracking-[-0.03em] text-[#FAF7EF] tabular-nums"
                aria-live="polite"
              >
                {formatInr(result.emi)}
              </p>
              <p className="mt-3 font-sans text-[0.9rem] text-[#EBE4D6]/75">
                over {result.months} months · {interestRate.toFixed(2)}% p.a.
              </p>
            </div>

            <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex shrink-0 items-center justify-center">
                <BreakdownRing
                  principalShare={principalShare}
                  interestShare={interestShare}
                  reduceMotion={reduceMotion}
                />
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-sans text-[0.55rem] uppercase tracking-[0.22em] text-[#C9A227]/85">
                    Total
                  </span>
                  <span className="mt-0.5 font-display text-[0.95rem] font-semibold tabular-nums text-[#FAF7EF]">
                    {formatInrCompact(result.totalPayment)}
                  </span>
                </div>
              </div>

              <ul role="list" className="w-full space-y-4 sm:max-w-[14rem]">
                <li className="flex items-start justify-between gap-3 border-b border-[#C9A227]/15 pb-3">
                  <span className="flex items-center gap-2 font-sans text-[0.82rem] text-[#EBE4D6]/85">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#E8C65A]" aria-hidden />
                    Principal
                  </span>
                  <span className="font-sans text-[0.88rem] font-medium tabular-nums text-[#FAF7EF]">
                    {formatInrCompact(loanAmount)}
                  </span>
                </li>
                <li className="flex items-start justify-between gap-3 border-b border-[#C9A227]/15 pb-3">
                  <span className="flex items-center gap-2 font-sans text-[0.82rem] text-[#EBE4D6]/85">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#8B6914]" aria-hidden />
                    Interest
                  </span>
                  <span className="font-sans text-[0.88rem] font-medium tabular-nums text-[#FAF7EF]">
                    {formatInrCompact(result.totalInterest)}
                  </span>
                </li>
                <li className="flex items-start justify-between gap-3">
                  <span className="font-sans text-[0.82rem] text-[#EBE4D6]/85">Total payable</span>
                  <span className="font-sans text-[0.88rem] font-semibold tabular-nums text-[#E8C65A]">
                    {formatInrCompact(result.totalPayment)}
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative space-y-4">
              <OpenConciergeButton
                variant="champagne"
                className="w-full border border-[#C9A227]/40 bg-[#C9A227] text-[#0c0906] hover:bg-[#E8C65A] sm:w-auto"
              >
                {ctaLabel}
              </OpenConciergeButton>
              <p className="font-sans text-[0.72rem] leading-relaxed text-[#EBE4D6]/55">{disclaimer}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
