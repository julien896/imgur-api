import { Card } from "./Card/Card"

export const GalleryComponent = ({ 
    children
} : { 
    children: React.ReactNode 
}) => (
    <div className="container">
        {children}
    </div>
)

GalleryComponent.Card = Card

