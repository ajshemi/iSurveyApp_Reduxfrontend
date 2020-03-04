import React, { Component } from 'react';
class AnalysisList extends Component {

  render() {
    return (
<table className="ui celled padded table">
  <thead className="">
    <tr className="">
      <th className="single line">Evidence Rating</th>
      <th className="">Effect</th>
      {/* <th className="">Efficacy</th> */}
      <th className="">Consensus</th>
      <th className="">Comments</th>
    </tr>
  </thead>
  <tbody className="">
    <tr className="">
      <td className=""><h2 className="ui center aligned header">A</h2></td>
      <td className="single line">Power Output</td>
      {/* <td className="">
        <div className="ui star rating" role="radiogroup" tabindex="-1">
          <i
            tabindex="0"
            aria-checked="false"
            aria-posinset="1"
            aria-setsize="3"
            className="active icon"
            role="radio"
          ></i>
          <i
            tabindex="0"
            aria-checked="false"
            aria-posinset="2"
            aria-setsize="3"
            className="active icon"
            role="radio"
          ></i>
          <i
            tabindex="0"
            aria-checked="true"
            aria-posinset="3"
            aria-setsize="3"
            className="active icon"
            role="radio"
          ></i>
        </div>
      </td> */}
      <td className="right aligned">
        80%
        <br />
        <a href="#">18 studies</a>
      </td>
      <td className="">
        Creatine supplementation is the reference compound for increasing muscular creatine levels;
        there is variability in this increase, however, with some nonresponders.
      </td>
    </tr>
    <tr className="">
      <td className=""><h2 className="ui center aligned header">A</h2></td>
      <td className="single line">Weight</td>
      {/* <td className="">
        <div className="ui star rating" role="radiogroup" tabindex="-1">
          <i
            tabindex="0"
            aria-checked="false"
            aria-posinset="1"
            aria-setsize="3"
            className="active icon"
            role="radio"
          ></i>
          <i
            tabindex="0"
            aria-checked="false"
            aria-posinset="2"
            aria-setsize="3"
            className="active icon"
            role="radio"
          ></i>
          <i
            tabindex="0"
            aria-checked="true"
            aria-posinset="3"
            aria-setsize="3"
            className="active icon"
            role="radio"
          ></i>
        </div>
      </td> */}
      <td className="right aligned">
        100%
        <br />
        <a href="#">65 studies</a>
      </td>
      <td className="">
        Creatine is the reference compound for power improvement, with numbers from one
        meta-analysis to assess potency
      </td>
    </tr>
  </tbody>
</table>
    );
  }

}

export default AnalysisList;