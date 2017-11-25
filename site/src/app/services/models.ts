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
    moduleFiles: string[];
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

export class StepsImplementation {
    languageId: string;
    steps: Step[];
}

export enum Platform {
    NA = 0,
    linux_deb = 1 << 0,
    linux_rpm = 1 << 1,
    linux = linux_deb | linux_rpm,
    macOS = 1 << 2,
    windows = 1 << 3,
    cross  = linux | macOS | windows
}

export class Step {
    type: StepType;
    program: string;
    command: string;
    name: string;
    link: string;
    notes: string[];
}

export enum StepType {
    install,
    open,
    command,
    image,
    none
}