export interface IResumeItem {
  date: {
    start: Date;
    end?: Date;
  };
  company: string;
  city?: string;
  site?: string;
  role: string;
  about: {
    target: string;
    task?: string[];
    command?: string;
    achievement: string;
  }[];
}

export interface IResumeProps {
  resume: IResumeItem;
}
