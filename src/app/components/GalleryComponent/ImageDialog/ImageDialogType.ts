import { Dispatch, SetStateAction } from "react";
import { Post } from "../../../models/Post";

export interface ImageDialogType {
    open: boolean;
    handleClose: Dispatch<SetStateAction<boolean>>;
    post: Post | any;
    getExtension(filename: string): string | undefined
}