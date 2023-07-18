export interface I_Image {
    account_id: string | null;
    account_url: string | null;
    ad_type: number;
    ad_url: string;
    animated: boolean;
    bandwidth: number;
    comment_count: string | null;
    datetime: number;
    description: string | null;
    downs: string | null;
    edited: string;
    favorite: boolean;
    favorite_count: string | null;
    has_sound: boolean;
    height: number;
    id: string;
    in_gallery: boolean;
    in_most_viral: boolean;
    is_ad: boolean;
    link: string;
    nsfw: string | null; 
    points: string | null; 
    score: string | null; 
    section: string | null;
    size: number;
    title: string | null; 
    type: string;
    ups: string | null; 
    views: number;
    vote: string | null; 
    width: number;
  }
    
export class Image {
  account_id: string | null;
  account_url: string | null;
  ad_type: number;
  ad_url: string;
  animated: boolean;
  bandwidth: number;
  comment_count: string | null;
  datetime: number;
  description: string | null;
  downs: string | null;
  edited: string;
  favorite: boolean;
  favorite_count: string | null;
  has_sound: boolean;
  height: number;
  id: string;
  in_gallery: boolean;
  in_most_viral: boolean;
  is_ad: boolean;
  link: string;
  nsfw: string | null; 
  points: string | null; 
  score: string | null; 
  section: string | null;
  size: number;
  title: string | null; 
  type: string;
  ups: string | null; 
  views: number;
  vote: string | null; 
  width: number;  
  
  constructor(args: I_Image) {
    this.id = args.id;
    this.ad_type = args.ad_type;
    this.ad_url = args.ad_url;
    this.comment_count = args.comment_count;
    this.account_id = args.account_id;
    this.account_url = args.account_url;
    this.animated = args.animated; 
    this.datetime = args.datetime;
    this.description = args.description;
    this.downs = args.downs; 
    this.favorite = args.favorite
    this.favorite_count = args.favorite_count; 
    this.bandwidth = args.bandwidth;
    this.edited = args.edited;
    this.in_gallery = args.in_gallery;
    this.in_most_viral = args.in_most_viral;
    this.has_sound = args.has_sound;
    this.is_ad= args.is_ad;
    this.height = args.height;
    this.size = args.size;
    this.link = args.link;
    this.nsfw = args.nsfw;
    this.points = args.points;
    this.title = args.title;
    this.score= args.score;
    this.section= args.section;
    this.type= args.type;
    this.ups = args.ups;
    this.views = args.views;
    this.vote = args.vote;
    this.width = args.width;
  }
}
   