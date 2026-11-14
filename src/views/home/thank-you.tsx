import { ThankYouIllustration } from "@/components/icons";
import { RATINGS, type Rating } from "@/data";

type ThankYouProps = {
  rating: Rating;
};

export default function ThankYou({ rating }: ThankYouProps) {
  return (
    <div className="grid justify-items-center px-6 py-9 text-center sm:px-9 sm:py-11">
      <ThankYouIllustration className="h-auto w-36 sm:w-40.5" />
      <p className="mt-6 flex h-8 items-center rounded-full bg-well px-3 text-body text-accent sm:mt-8 sm:px-5 sm:text-body-lg">
        You selected {rating} out of {RATINGS.length}
      </p>

      <h1
        ref={(heading) => heading?.focus()}
        tabIndex={-1}
        className="mt-6 text-heading font-bold outline-transparent sm:mt-8 sm:text-heading-lg"
      >
        Thank you!
      </h1>
      <p className="mt-2 text-body text-muted sm:text-body-lg">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
