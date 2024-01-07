import ContentSection from "@/components/content/Content";
import UploadSection from "@/components/upload/Upload";

export default function Home() {
  return (
    <main style={{ height: "100%", minHeight: "100vh" }}>
      <UploadSection type="imageUploader" />
      <ContentSection />
    </main>
  );
}
