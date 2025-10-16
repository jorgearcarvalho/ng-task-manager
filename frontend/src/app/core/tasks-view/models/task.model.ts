export interface TaskModel {
    id: number,
    title: string,
    description?: string,
    expirationDate?: Date,
    completed: boolean
}