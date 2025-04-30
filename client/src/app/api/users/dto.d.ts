export type ApiResponse = {
  users: ResponseDto[];
};

export type GetUsersResponseDto = {
  id: string;
  name: string;
  email: string;
  city: string;
  days_of_week: string;
  posts: number;
  albums: number;
  created_at: string;
  updated_at: string;
};
