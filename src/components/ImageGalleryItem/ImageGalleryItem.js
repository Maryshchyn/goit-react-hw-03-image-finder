import {StyledItem, StyledImage} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ item }) => {

    return (
        <StyledItem >
            <StyledImage src={item.userImageURL} alt="" />
        </StyledItem>
    )
 }