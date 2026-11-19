import { bonusDateLabel, offer } from "@/data/site"

export function AnnouncementBar() {
  return (
    <div className="bg-pf-ink px-4 py-2 text-center text-[13px] leading-5 text-pf-on-dark">
      <p className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span className="rounded-full bg-pf-emerald px-2 py-0.5 text-[10px] font-bold tracking-[0.14em] text-white">
          BONUS
        </span>
        <span>
          Phantom AI Trading Coach ({offer.aiAnnualValue} value){" "}
          <span className="font-semibold text-pf-emerald-softer">FREE</span>
          {" — "}Phantom AI bonus included free until {bonusDateLabel()}
        </span>
      </p>
    </div>
  )
}
