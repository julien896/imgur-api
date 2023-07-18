import { BaseFiltersComponent } from "./BaseFilters/BaseFiltersComponent"
import { CardComponent } from "./Card/CardComponent"

export const GalleryComponent = ({ 
    children
} : { 
    children: React.ReactNode 
}) => (
    <div className="container">
        {children}
    </div>
)

GalleryComponent.Card = CardComponent
GalleryComponent.Filters = BaseFiltersComponent


