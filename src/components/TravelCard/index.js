import './index.css'

const TravelCard = props => {
  const {cardDetails} = props
  const {name, imageUrl, description} = cardDetails

  return (
    <li className="travel-card">
      <img src={imageUrl} alt={name} className="img" />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </li>
  )
}

export default TravelCard
