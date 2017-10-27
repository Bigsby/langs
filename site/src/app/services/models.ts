export class Language {
    id: string;
    name: string;
    version: string;
    order: number;
    description: string;
    tags: string[];
    link: string;
    links: string[];
    hljs: string;
    mime: string;
    current: boolean;
    show: boolean;
}

export class Project{
    id: string;
    name: string;
    show: boolean;
    order: number;
    type: ProjectType;
    description: string;
    text: string;
    languages: string[];
    outpu: string;
    notes: object;
    extraCode: object;
}

export class Output {
    text: string;
    outpu: string;
}


export enum ProjectType{
    steps,
    code
}

export class Program
{
    name: string;
    link: string;
    description: string;
}