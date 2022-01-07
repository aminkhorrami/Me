import React from "react"
import "./style.scss"

import resume from "../../../data/resume.json"

export default class Experiences extends React.Component {
  get experiences() {
    const result = []
    resume.experiences.forEach((item, i) => {
      if (item.hidden) return
      result.push(
        <li key={`experience-${i}`}>
          <h3>
            {item.title}{" "}
            <span>
              ({item.span.from} - {item.span.to})
            </span>
          </h3>
          <strong>{item.company}</strong>
          {item.jobDetails && (
            <>
              {item.jobDetails.map((i) => (
                <li>
                  <h4>{i.company}</h4>
                  <p>{i.description}</p>
                </li>
              ))}
            </>
          )}
          <em>{item.location}</em>
          {item.description && <p>{item.description}</p>}
        </li>
      )
    })
    return result
  }

  render() {
    return (
      <section className="Experiences">
        <h2>Experiences</h2>
        <ol>{this.experiences}</ol>
      </section>
    )
  }
}
