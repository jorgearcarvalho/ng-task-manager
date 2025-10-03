export interface TaskModel {
    id: number,
    title: string,
    description?: string,
    completeUntil?: Date,
    completed: boolean
}