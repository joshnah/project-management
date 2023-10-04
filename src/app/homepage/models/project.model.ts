export interface TodoItem {
  description: string;
  done: boolean;
  importance?: number;
  urgency?: number;
  progress?: number;
  deadline?: Date;
  id: number;
}

export interface Link {
  title: string;
  url: string;
}
export interface Project {
  todoList: TodoItem[];
  id: number;
  links: Link[];
  title: string;
}
