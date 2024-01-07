interface IUpload {
  fileUrl: string;
  fileKey: string;
  type: "image" | "video";
}

export type { IUpload };
