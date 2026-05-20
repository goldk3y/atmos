import ExpandableCards from "@/components/ui/smoothui/expandable-cards";

const useCases = [
  {
    id: 1,
    title: "Equine",
    summary: "Focused cold therapy wherever the horse is working.",
    content:
      "Use Atmos around stalls, trailers, and training days when you need a localized cold-therapy workflow without moving the whole operation.",
    image: "/equine.jpg",
    link: "/cryotherapy/equine",
  },
  {
    id: 2,
    title: "Clinics & Chiropractic",
    summary: "Add recovery without rebuilding the clinic.",
    content:
      "Give practitioners a focused modality that fits treatment rooms, patient education, and existing appointment flow.",
    image: "/chiro.jpg",
    link: "/cryotherapy/clinics",
  },
  {
    id: 3,
    title: "Sports Recovery",
    summary: "Make targeted recovery easy for teams to run.",
    content:
      "Support trainers, athletes, and staff with a simple localized workflow for high-use areas, practice days, and event recovery.",
    image: "/sports-recovery.jpg",
    link: "/cryotherapy/sports-recovery",
  },
  {
    id: 4,
    title: "Wellness & Medspa",
    summary: "A premium treatment with grounded claims.",
    content:
      "Offer a localized cold therapy experience that feels elevated while staying clear, responsible, and easy for guests to understand.",
    image: "/spa.jpg",
    link: "/cryotherapy/medspa",
  },
];

export default function UseCaseSection() {
  return (
    <section
      id="use-cases"
      className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-3xl">
          <h2 className="text-pretty text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl sm:leading-[1.05] md:text-5xl">
            See how Atmos fits into your business.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8 md:text-xl">
            Atmos is designed for operators who need focused cold therapy to fit
            into real service environments, not force a new facility model.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <ExpandableCards cards={useCases} />
        </div>
      </div>
    </section>
  );
}
