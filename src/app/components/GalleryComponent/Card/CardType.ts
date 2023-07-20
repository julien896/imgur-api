export interface CardType {
    image: string;
    description: string;
    getImage: () =>  void;
    getExtension(filename: string): string | undefined
}