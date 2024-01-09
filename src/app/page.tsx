"use client";

import Actions from "@/components/actions/Actions";
import ContentSection from "@/components/content/Content";
import UploadSection from "@/components/upload/Upload";
import { useAppSelector } from "@/hooks/redux";
import { useState } from "react";

export default function Home() {
  const media = useAppSelector((state) => state.upload);

  const [currentIndex, setCurrentIndex] = useState(
    media?.length <= 0 ? 0 : media.length - 1
  );

  return (
    <main style={{ height: "100%", minHeight: "100vh" }}>
      <UploadSection type="imageUploader" />
      <ContentSection
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Actions currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </main>
  );
}
