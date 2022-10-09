import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import {StyledList} from './ImageGallery.styled'

export const ImageGallery = ({items}) => {
    return (
        <StyledList >
            {items.map(item => (
                <ImageGalleryItem key={item.id} item={item} />
            ))}
        </StyledList>
    )
}
 














//  <ul>
//                 {items.hits?.map(({ previewURL: src}) => {
//                     return (
//                         <li  className="gallery-item">
//                             <img src={src} alt="" />
//                         </li>
//                     )
                    
//                 })}
//             </ul>