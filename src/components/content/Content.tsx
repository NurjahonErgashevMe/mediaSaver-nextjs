"use client";
import { FC, useEffect, useState } from "react";
import s from "./Content.module.css";
import { useAppSelector } from "@/hooks/redux";
import Image from "next/image";

const ContentSection: FC = () => {
  const media = useAppSelector((state) => state.upload);
  const [currentIndex, setCurrentIndex] = useState(
    media?.length <= 0 ? 0 : media.length - 1
  );

  useEffect(() => {
    setCurrentIndex(() => (media?.length <= 0 ? 0 : media.length - 1));
  }, [media]);

  if (!media.length) {
    return <></>;
  }

  const current = media?.[currentIndex];

  return (
    <div className={s.contentSection}>
      <div className={s.content}>
        {current?.type === "image" ? (
          <Image
            src={current?.fileUrl}
            alt={current?.fileUrl}
            width={300}
            height={300}
          />
        ) : (
          <video controls src={current?.fileUrl} />
        )}
      </div>
    </div>
  );
};

export default ContentSection;
