export default function SectionDivider() {
  return (
    <div aria-hidden="true" className="relative h-px w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      <span className="absolute top-1/2 left-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-light/70" />
    </div>
  );
}
