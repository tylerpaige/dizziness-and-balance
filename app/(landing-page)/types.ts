export type ResourceType = "reference" | "lecture" | "exercise" | "assignment";
export type FormatType = "figma" | "slides" | "docs";

export interface Resource {
  title: string;
  description?: string;
  type: ResourceType;
  format?: FormatType;
  url: string;
}

export interface Course {
  title: string;
  objective: string;
  dates: string[];
  place: string;
  url?: string;
}

export interface Data {
  legend: {
    types: Record<ResourceType, string>;
    formats: Record<FormatType, string>;
  };
  resources: Resource[];
  courses: Course[];
}
