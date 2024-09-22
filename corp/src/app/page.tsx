import homeImg from "@/../public/home.jpg";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        imageData={homeImg}
        imgAlt="car factory"
        title="Professtional Cloud Hosting"
      />
    </div>
  );
}
