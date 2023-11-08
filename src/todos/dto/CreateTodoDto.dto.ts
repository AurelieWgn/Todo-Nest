export class CreateTodoDto {
  readonly id: number;
  readonly done: boolean;
  readonly title: string;
  readonly description?: string;
}
