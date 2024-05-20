type GetApiParams = {
    url: string;
    params?: Record<string, string | number>;
    headers?: Record<string, string>;
}

type PostApiParams = Omit<GetApiParams, 'params'> & { data?: any };

type DeleteApiParams = GetApiParams;

type PutApiParams = PostApiParams;

type ApiResponse = {
    data: any;
    err: null
} | {
    data: null;
    err: any;
}


export type { GetApiParams, PostApiParams, DeleteApiParams, PutApiParams, ApiResponse };
