const Image = ({className, link, alt}) => {
  return (
    <img src={link} alt={alt} className={className} />
  )
}

export default Image