


export const ImageGallery = ({items}) => {
    return (
        <ul >
            {items.map(item => (
        <li >
            <img src={item.userImageURL} alt="" />
        </li>
            ))}
  
</ul>
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