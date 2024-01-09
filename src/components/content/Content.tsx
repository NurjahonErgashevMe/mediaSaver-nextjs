"use client";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import s from "./Content.module.css";
import { useAppSelector } from "@/hooks/redux";
import Image from "next/image";

interface ContentSectionProps {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  currentIndex: number;
}

const ContentSection: FC<ContentSectionProps> = ({
  currentIndex,
  setCurrentIndex,
}) => {
  const media = useAppSelector((state) => state.upload);

  useEffect(() => {
    setCurrentIndex(() => (media?.length <= 0 ? 0 : media.length - 1));
  }, [media, setCurrentIndex]);

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
