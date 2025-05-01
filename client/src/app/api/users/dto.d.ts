export type ApiResponse = {
  users: ResponseDto[];
};

type Data = {
  id: string;
  name: string;
  email: string;
  posts: number;
  albums: number;
  created_at: string;
  updated_at: string;
  city: string;
  days_of_week: string;
}

export type GetUsersResponseDto = {
  data: Data[],
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
  },
};
