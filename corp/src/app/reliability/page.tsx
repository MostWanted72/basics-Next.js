import reliabilityImg from "@/../public/reliability.jpg";
import Hero from "@/components/Hero";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        imageData={reliabilityImg}
        imgAlt="welding"
        title="Super high reliability hosting"
      />
    </div>
  );
}
