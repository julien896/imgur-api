import api from "../api";
import { Post } from "../../models/Post";
import { BaseFilters } from "../../models/Filters";

export const getPostsMapper = (x: any): Post => new Post(x);

export class GalleryRepository {

  getPosts = async (filters: BaseFilters) => {
    const res = await api.get(`/3/gallery/${filters.section}/${filters.sort}/${filters.page}?showViral=${filters.showViral}`);
    return res.data.data.map(getPostsMapper);
  };
}

