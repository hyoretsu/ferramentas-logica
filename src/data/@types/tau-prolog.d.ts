type Term = {
 ref: number;
 id: string;
 args: Term[];
 indicator: string;
};

interface Session {
 answers: (result: boolean) => void;
 consult: (program: string) => void;
 format_answer: (answer: any) => string;
 query: (goal: string) => void;
}

export const pl = {
 create: async () => Session,
};
