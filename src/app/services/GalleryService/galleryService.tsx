import api from "../api";
import { Post } from "../../models/Post";
import { Image } from "../../models/Image";
import { Params } from "../../models/Params";

export const getPostsMapper = (x: any): Post => new Post(x);

export const getImageMapper = (x: any): Image => new Image(x);

export class GalleryRepository {

  getPosts = async (filters: Params) => {
    const res = await api.get(`/3/gallery/${filters.section}/${filters.sort}/${filters.page}?showViral=${filters.showViral}`);
    return res.data.data.map(getPostsMapper);
  };

  getImageById = async (id: string) => {
    const res = await api.get(`/3/image/${id}`);
    return getImageMapper(res.data.data);
  };
}

