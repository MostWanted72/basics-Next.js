import Hero from "@/components/Hero";
import performanceImg from "@/../public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imageData={performanceImg}
        imgAlt="welding"
        title="We serve high performance applications"
      />
    </div>
  );
}
