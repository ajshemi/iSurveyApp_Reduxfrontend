import React from "react"

const CommentAnalysis = (props) => {
    const {emotion,comment,sentiment}=props
  return(
    <tr>
      <td>{comment.user_comment}</td>
      <td>{`${sentiment.label} | ${sentiment.score}`}</td> 
      <td>{emotion.sadness}</td>
      <td>{emotion.joy}</td>
      <td>{emotion.fear}</td>
      {/* <td><button type="button" className="btn btn-primary">Edit Pizza</button></td> */}
    </tr>
  )
}

export default CommentAnalysis