import React, { Component } from 'react';
import CommentAnalysis from './CommentAnalysis'


class AnalysisList extends Component {

  render() {
    // console.log(this.props.comments.id)
    let arrayOfEmotions=this.props?.emotions.map(emotion=><CommentAnalysis key={emotion.id} emotion={emotion} comment={this.props.comments.find(comment=>comment.id===emotion.comment_id)} sentiment={this.props.sentiments.find(sentiment=>sentiment.comment_id===emotion.comment_id)}/>)
    return (
        <table className="ui celled padded table">
            <thead className="">
                <tr className="">
                <th className="">Comments</th>
                <th className="">Sentiments</th>
                <th className="single line">Sadness</th>
                <th className="">Joy</th>
                <th className="">Fear</th>
                </tr>
            </thead>
            <tbody className="">
                {arrayOfEmotions}
            </tbody>
        </table>
    );
  }
}

export default AnalysisList;