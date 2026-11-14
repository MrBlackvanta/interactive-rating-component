import { StarBadge } from "@/components/ui";
import { SITE_NAME } from "@/data";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "There’s nothing to rate at this address, but your support request is still waiting for a score.";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Page not found`,
  description,
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main className="grid grow place-items-center px-6 py-8">
      <div className="v-card px-6 pt-6 pb-8 sm:px-9 sm:py-8">
        <StarBadge />
        <h1 className="mt-4 text-heading font-bold sm:mt-7.5 sm:text-heading-lg">
          Page not found
        </h1>
        <p className="mt-2 text-body text-muted sm:text-body-lg">
          {description}
        </p>
        <Link href="/" className="mt-6 v-button sm:mt-8">
          Back to the rating
        </Link>
      </div>
    </main>
  );
}
