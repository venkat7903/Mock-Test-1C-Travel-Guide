import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TravelCard from '../TravelCard'

import './index.css'

const getFormattedData = data => ({
  id: data.id,
  name: data.name,
  imageUrl: data.image_url,
  description: data.description,
})

class TravelGuide extends Component {
  state = {placesList: [], isLoading: 'initial'}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    this.setState({isLoading: true})

    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()
    const formattedData = data.packages.map(each => getFormattedData(each))

    this.setState({placesList: formattedData, isLoading: false})
  }

  render() {
    const {placesList, isLoading} = this.state
    return (
      <div className="travel-app-container">
        <h1 className="app-title">Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="cards-list">
            {placesList.map(each => (
              <TravelCard key={each.id} cardDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TravelGuide
