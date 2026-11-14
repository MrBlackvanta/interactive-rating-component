import { StarIcon } from "@/components/icons";
import { RATINGS, type Rating } from "@/data";
import { useId } from "react";

type RatingFormProps = {
  onSubmit: (rating: Rating) => void;
};

export default function RatingForm({ onSubmit }: RatingFormProps) {
  const headingId = useId();
  const descriptionId = useId();

  function submitRating(formData: FormData) {
    const choice = formData.get("rating");
    const rating = RATINGS.find((score) => String(score) === choice);
    if (rating) onSubmit(rating);
  }

  return (
    <form action={submitRating} className="px-6 pt-6 pb-8 sm:px-9 sm:py-8">
      <div className="grid size-10 place-items-center rounded-full bg-well text-accent sm:size-12">
        <StarIcon className="h-auto w-3.5 sm:w-4" />
      </div>

      <h1
        id={headingId}
        className="mt-4 text-heading font-bold sm:mt-7.5 sm:text-heading-lg"
      >
        How did we do?
      </h1>
      <p
        id={descriptionId}
        className="mt-2 text-body text-muted sm:text-body-lg"
      >
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <fieldset
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        className="mt-6 grid grid-cols-5 gap-4 sm:gap-5"
      >
        {RATINGS.map((score) => (
          <label
            key={score}
            className="grid aspect-square place-items-center rounded-full bg-well text-rating font-bold text-subtle transition-colors not-has-checked:hover:bg-action not-has-checked:hover:text-ink has-checked:bg-selected has-checked:text-ink has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ink sm:text-rating-lg"
          >
            <input
              type="radio"
              name="rating"
              value={score}
              required
              className="sr-only"
            />
            {score}
          </label>
        ))}
      </fieldset>

      <button
        type="submit"
        className="mt-6 h-11 w-full rounded-full bg-action text-label font-bold text-ink uppercase transition-colors hover:bg-ink hover:text-action sm:mt-8 sm:text-label-lg"
      >
        Submit
      </button>
    </form>
  );
}
