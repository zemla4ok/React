type User = {
  name: string,
  age: number
};

interface ApiResponse {
  data: {
    user: User,
  },
  status: number
}

export enum RENDERING_RESULT {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  UNDEFINED = "UNDEFINED",
}