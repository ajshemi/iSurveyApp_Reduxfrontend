import React, { Component } from 'react';
import Chart from './Chart'
import {connect} from 'react-redux'

class ChartsContainer extends Component {
    // let arrayOfComponents=newArray.map(element=><Chart chartData={{labels:mappedEthnicities[element],datasets:[{label:`stats for ${objectKeys[element]} name`,data:mappedCounts[element],backgroundColor:'rgba(255, 159, 64, 0.6)'}]}} legendPosition="top"/>)
    render() { 
        console.log(this.props)
        console.log(this.props.emotions)
        console.log(this.props.sentiments)
        // debugger

    //    let {sadness,joy,fear,anger,disgust}=this.props?.emotions[0]
       let arrayOfEmotionsData=this.props.emotions.map(emotion=>[emotion.sadness,emotion.joy,emotion.fear,emotion.anger,emotion.disgust])
       let chartdata=arrayOfEmotionsData.map((array,index)=>{
           return {label:`User ${index}`,data:array,backgroundColor:`rgba(${255-(Math.floor(Math.random() * 50) + 1)}, ${159-(Math.floor(Math.random() * 100) + 1)}, ${64+(Math.floor(Math.random()*5)+1)})`}}
        )
       console.log(arrayOfEmotionsData)
       console.log(chartdata)
        // let chartData={labels:['oatmeal raisin','macadamia nut','chocolate chip'],datasets:[{label:"stats for one name", data:[5,3,2],backgroundColor:'rgba(255, 159, 64)'}]}
        let chartData={labels:['sadness','joy','fear','anger','disgust'],datasets:chartdata}
        // console.log(chartData1)
        return (
             <div>
                 <Chart chartData={chartData} legendPosition="top"/>
             </div> );
    }
}

const mapStateToProps=(state) => {
    return{
        sentiments:state.sentiments.sentiments,
        emotions:state.emotions.emotions,
        comments:state.comments.allcomments
    }
    
}
export default connect(mapStateToProps)(ChartsContainer) ;