export enum Locals {
  SearchQueries = "searchQueries",
  Token = "token",
  TokenType = "token_type",
}

class LocalStorage {
  private readonly MAX_SEARCH_QUERY_LENGTH = 5;

  public getToken(): string {
    return localStorage.getItem(Locals.Token) ?? "";
  }

  public getTokeType(): string {
    return localStorage.getItem(Locals.TokenType) ?? "";
  }

  public getSearchQueries(): string[] {
    try {
      const data = localStorage.getItem(Locals.SearchQueries);

      if (!data) {
        return [];
      }

      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  public setToken(token: string): void {
    localStorage.setItem(Locals.Token, token);
  }

  public setTokenType(tokenType: string): void {
    localStorage.setItem(Locals.TokenType, tokenType);
  }

  public addSearchQuery(query: string): void {
    try {
      const searchQueries = localStorage.getItem(Locals.SearchQueries);

      if (!searchQueries) {
        localStorage.setItem(Locals.SearchQueries, JSON.stringify([query]));
        return;
      }

      const parsedSearchQueries: string[] = JSON.parse(searchQueries);

      const isExist = parsedSearchQueries.find((element) => element === query);

      let newSearchQueries;

      if (isExist) {
        newSearchQueries = parsedSearchQueries.filter(
          (element) => element !== query
        );
        newSearchQueries.unshift(query);
      } else {
        newSearchQueries =
          parsedSearchQueries.unshift(query) &&
          parsedSearchQueries.slice(0, this.MAX_SEARCH_QUERY_LENGTH);
      }

      localStorage.setItem(
        Locals.SearchQueries,
        JSON.stringify(newSearchQueries)
      );
    } catch {
      localStorage.removeItem(Locals.SearchQueries);
    }
  }

  public removeToken(): void {
    localStorage.removeItem(Locals.Token);
  }

  public removeTokenType(): void {
    localStorage.removeItem(Locals.TokenType);
  }
}

const storage = new LocalStorage();

export default storage;
