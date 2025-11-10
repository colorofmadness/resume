type ResumeItem = {
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
};

interface IResumeProps {
  resume: ResumeItem;
}

export type { IResumeProps, ResumeItem };
