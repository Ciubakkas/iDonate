export interface Appendix {
  type: AppendixType;
  displayName: string;
  fileName: string;
}

export enum AppendixType {
  IMAGE = "IMAGE",
  PDF = "PDF",
}
