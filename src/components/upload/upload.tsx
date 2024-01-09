"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadButton } from "@uploadthing/react";

import { OurFileRouter } from "../../app/api/uploadthing/core";

import { FC, useState } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { onSave } from "@/store/slices/upload";

import s from "./Upload.module.css";
import { IUpload } from "@/types/upload";

interface IUploadSection {
  type: "imageUploader" | "mediaPost";
}

const UploadSection: FC<IUploadSection> = ({ type }) => {
  const [, setRender] = useState<"render">("render");
  const dispatch = useAppDispatch();

  const handleSave = (res: IUpload) => dispatch(onSave(res));

  return (
    <div className={s.button}>
      <UploadButton<OurFileRouter>
        endpoint={type}
        onClientUploadComplete={(res) => {
          if (res) {
            handleSave({
              ...res[0],
              saved: false,
              type: type === "imageUploader" ? "image" : "video",
              labels: {},
            });
          }
          console.log(res);
          setRender("render");
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          console.log(error)
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default UploadSection;
