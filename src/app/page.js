import portfolioSEO from "@/src/lib/seo";


export const metadata = {
  ...portfolioSEO,
  alternates: {
    canonical: "https://www.themahi.in/"
  }
};

export default function Home() {
  return (
   <h1>Welcome to Manoj Barhpagga's Portfolio</h1>
  );
}
