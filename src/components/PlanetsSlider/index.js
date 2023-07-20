import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planets-slider">
      <h1 className="planet-item-title">PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(planetDetails => (
            <PlanetItem key={planetDetails.id} planetDetails={planetDetails} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
