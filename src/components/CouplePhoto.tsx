export const CouplePhoto = () => {
  
  const [ couplePhoto ] = Object.values(
    import.meta.glob(`/src/assets/photos/CouplePhoto.jpg`, {
      query: '?url',
      import: 'default',
      eager: true
    })
  ) as string[];

  return (
    <div className="couple-photo" >
      <img src = {couplePhoto} alt = "couple-photo-ana-luis" />
    </div>
  ) 
}