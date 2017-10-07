export class Post {
  id: number;
  title: string;
  desc: string;
  categories: string[];
  exercises: any[];
}

export class Category {
  muscle: string;
  src: string;
  selected: boolean;
}
