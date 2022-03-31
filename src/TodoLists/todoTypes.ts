export interface TodoType {
    id: string,
    title: string,
    completed: boolean,
}

export type filteredBy = 'all' | 'completed' | 'uncompleted';
