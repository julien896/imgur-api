export interface BaseFilters {
    page?: string;
    section?: 'hot' | 'top' | 'user';
    sort?: 'viral' | 'top' | 'time' | 'rising' | null;
    window?: 'day' | 'week' | 'month' | 'year' | 'all' | null;
}