import { StarIcon } from "@/components/icons";

export default function StarBadge() {
  return (
    <div className="grid size-10 place-items-center rounded-full bg-well text-accent sm:size-12">
      <StarIcon className="h-auto w-3.5 sm:w-4" />
    </div>
  );
}
