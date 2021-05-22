export interface Clause {
  id: string;
  title: string;
  text?: string;
  type: string;
  variables:
    | string[]
    | {
        [k: string]: string[];
      };
}
