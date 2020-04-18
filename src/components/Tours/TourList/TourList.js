import React, { Component } from "react"
import styles from "../../HomeComponents/FeaturedTours/featuredTours.module.css"
import Tour from "../Tour"
import Title from "../../HomeComponents/Title/Title"

export default class TourList extends Component {
  state = {
    tours: [],
    sortedTours: [],
  }

  componentWillMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    })
  }
  render() {
    return (
      <section className={styles.tours}>
        <Title title="our" subtitle="tours" />
        <div className={styles.center}>
          {this.state.sortedTours.map(({ node }) => {
            return <Tour key={node.contentful_id} tour={node} />
          })}
        </div>
      </section>
    )
  }
}
