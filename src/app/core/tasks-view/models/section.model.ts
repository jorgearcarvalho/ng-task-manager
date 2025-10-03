import { TaskModel } from "./task.model";

export interface SectionModel {
    name: string;
    tasks: TaskModel[];
}
