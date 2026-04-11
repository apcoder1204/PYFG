import type { FormEvent } from "react";
import { Seo } from "../components/Seo";
import { trackClarityEvent, trackEvent } from "../lib/analytics";

export function DonatePage() {
  const onDonateSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackEvent("donation_intent_submitted", { source: "donation_page" });
    trackClarityEvent("donation_intent_submitted");
    alert("Thanks for your support. Connect Stripe or Coinbase Commerce API in next step.");
  };

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <Seo
        title="Donate Securely | PYFG Tanzania"
        description="Support youth programs through secure donations. Multi-currency and crypto integration ready."
      />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <article className="rounded-3xl bg-dark p-8 text-white">
          <h1 className="text-3xl font-extrabold">Secure Donation Flow</h1>
          <p className="mt-3 text-slate-300">
            This production scaffold is ready for Stripe Checkout or Coinbase Commerce integration
            using server-side webhooks and donor receipt automation.
          </p>
          <ul className="mt-6 space-y-2 text-slate-200">
            <li>• Multi-currency donation capture</li>
            <li>• Crypto-ready extension point</li>
            <li>• SROI attribution from contribution to outcomes</li>
          </ul>
        </article>
        <form onSubmit={onDonateSubmit} className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-dark">Start a Donation</h2>
          <div className="mt-4 space-y-4">
            <input required placeholder="Full name" className="w-full rounded-xl border p-3" />
            <input required type="email" placeholder="Email address" className="w-full rounded-xl border p-3" />
            <input required type="number" min={1} placeholder="Amount (USD)" className="w-full rounded-xl border p-3" />
            <button type="submit" className="w-full rounded-xl bg-primary px-5 py-3 font-bold text-white">
              Continue to Secure Checkout
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
