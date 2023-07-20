import { I_Image } from "./Image";

export interface IPost {
  id: string;
  ad_type: number;
  ad_url: string;
  comment_count: number;
  cover: string;
  cover_height: number;
  cover_width: number; 
  datetime: number;
  description: string | null;
  downs: number; 
  favorite: boolean
  favorite_count: number; 
  images_count: number;
  images: I_Image[];
  in_gallery: boolean;
  in_most_viral: boolean;
  include_album_ads: boolean;
  is_ad: boolean;
  is_album: boolean;
  layout: string;
  link: string;
  nsfw: boolean;
  title: string;
  points: number;
  ups: number;
  privacy: string;
  score: number;
  section: string;
}
  
export class Post {
  id: string;
  ad_type: number;
  ad_url: string;
  comment_count: number;
  cover: string;
  cover_height: number;
  cover_width: number; 
  datetime: number;
  description: string | null;
  downs: number; 
  favorite: boolean
  favorite_count: number; 
  images_count: number;
  images: I_Image[];
  in_gallery: boolean;
  in_most_viral: boolean;
  include_album_ads: boolean;
  is_ad: boolean;
  is_album: boolean;
  title: string;
  layout: string;
  ups: number;
  link: string;
  nsfw: boolean;
  points: number;
  privacy: string;
  score: number;
  section: string;  

  constructor(args: IPost) {
    this.id = args.id;
    this.ad_type = args.ad_type;
    this.ad_url = args.ad_url;
    this.comment_count = args.comment_count;
    this.cover= args.cover;
    this.cover_height= args.cover_height;
    this.cover_width= args.cover_width; 
    this.datetime= args.datetime;
    this.description= args.description;
    this.downs= args.downs; 
    this.favorite= args.favorite
    this.favorite_count= args.favorite_count; 
    this.images_count= args.images_count;
    this.images= args.images;
    this.in_gallery= args.in_gallery;
    this.in_most_viral= args.in_most_viral;
    this.include_album_ads= args.include_album_ads;
    this.is_ad= args.is_ad;
    this.is_album= args.is_album;
    this.title = args.title;
    this.layout= args.layout;
    this.link= args.link;
    this.nsfw= args.nsfw;
    this.points= args.points;
    this.ups= args.ups;
    this.privacy= args.privacy;
    this.score= args.score;
    this.section= args.section;
  }
}
 