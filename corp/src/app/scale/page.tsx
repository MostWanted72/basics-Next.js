import scaleImag from "@/../public/scale.jpg";
import Hero from "@/components/Hero";

export default function ScalePage() {
  return (
    <div>
      <Hero
        imageData={scaleImag}
        imgAlt="steel factory"
        title="Scale your application to infinity"
      />
    </div>
  );
}
