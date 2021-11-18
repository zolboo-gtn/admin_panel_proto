export class User {
  constructor(
    public id: string,
    public name: string,
    public nationality: string,
    public prefecture: string,
    public visa: string,
    public createdAt: string,
    public updatedAt: string
  ) {}
}
