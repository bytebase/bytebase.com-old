export function slugify(name: string): string {
  return name.toLowerCase().replaceAll(" ", "-");
}
