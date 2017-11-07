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

export class Project {
    id: string;
    name: string;
    show: boolean;
    order: number;
    type: ProjectType;
    description: string;
    text: string;
    languages: string[];
    output: string;
    alternativeOutputs: Output;
    notes: object;
    extraCode: object;
}

export class Output {
    text: string;
    output: string;
}


export enum ProjectType {
    steps,
    code
}

export class Program {
    name: string;
    link: string;
    description: string;
}

export class ProjpectImplementation {
    projectId: string;
    languages: (LanguageImplementation | string)[];
}

export class LanguageImplementation {
    notes: string[];
    isCross: boolean = true;
}

export class PlatformImplementation {
    notAvailable: boolean;
    notes: string;
}