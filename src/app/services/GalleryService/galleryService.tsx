import api from "../api";
import { Post } from "../../models/Post";
import { BaseFilters } from "../../models/Filters";

export const getPostsMapper = (x: any): Post => new Post(x);

export class GalleryRepository {

  getPosts = async () => {
    const res = await api.get(`/3/gallery/hot/viral/day`);
    return res.data.data.map(getPostsMapper);
  };
}

