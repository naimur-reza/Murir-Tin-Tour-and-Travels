export interface TErrorResponse {
  status: string;
  statusCode: number;
  message: string;
  issues: TErrorIssue[];
}

export interface TErrorIssue {
  path: string;
  message: string;
}