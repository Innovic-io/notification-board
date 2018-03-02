export interface IJSONResponse<T> {
  status: boolean;
  result?: T;
  error?: IJsonError;

}

export interface IJsonError {
  code?: number;
  message?: string;
}
