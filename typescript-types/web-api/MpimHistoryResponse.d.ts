export interface MpimHistoryResponse {
    ok?:       boolean;
    messages?: any[];
    has_more?: boolean;
    error?:    string;
    needed?:   string;
    provided?: string;
}
