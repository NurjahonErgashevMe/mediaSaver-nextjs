interface IUpload {
  fileUrl: string;
  fileKey: string;
  type: "image" | "video";
  saved: boolean;
  labels: Partial<
    IUpload["type"] extends "video"
      ? {
          opaicity: number;
          autoPlay: number;
          width: number;
          height: number;
        }
      : {
          opaicity: number;
          height: number;
          width: number;
          borderRadius: number;
        }
  >;
}

export type { IUpload };
