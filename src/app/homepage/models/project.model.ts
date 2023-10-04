export interface TodoItem {
  title: string;
  done: boolean;
  importance?: number;
  urgency?: number;
  progress?: number;
  deadline?: Date;
}

export interface Project {
  todoList: TodoItem[];
  id: number;
}
