export interface BaseFilters {
    page: number;
    section?: 'hot' | 'top' | 'user';
    sort?: 'viral' | 'top' | 'time' | 'rising' | null;
    window?: 'day' | 'week' | 'month' | 'year' | 'all' | null;
    showViral: boolean;
}