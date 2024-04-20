export type Category = {
  id: string;
  category_name: Record<Languages, string>;
  image: string;
  items: Array<Item>

}
export enum Languages {
  ar = 'ar',
  en = 'en',
  cz = 'cz',
}
export type Item = {
  "name": Record<Languages, string>;
  id: string;
  nember: string;
  image: string;
  price: string;
  description: Record<Languages, string>
}