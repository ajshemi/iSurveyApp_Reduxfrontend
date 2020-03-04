import React, { Component } from 'react';
import Chart from './Chart'
import {connect} from 'react-redux'
import AnalysisList from './AnalysisList'

class ChartsContainer extends Component {
    // let arrayOfComponents=newArray.map(element=><Chart chartData={{labels:mappedEthnicities[element],datasets:[{label:`stats for ${objectKeys[element]} name`,data:mappedCounts[element],backgroundColor:'rgba(255, 159, 64, 0.6)'}]}} legendPosition="top"/>)
    render() { 
        console.log(this.props)
        // console.log(this.props.emotions.sadness)
        // debugger

    //    let {sadness,joy,fear,anger,disgust}=this.props?.emotions[0]
       let arrayOfEmotionsData=this.props.emotions.map(emotion=>[emotion.sadness,emotion.joy,emotion.fear,emotion.anger,emotion.disgust])
       let chartdata=arrayOfEmotionsData.map((array,index)=>{
           return {label:`User ${index}`,data:array,backgroundColor:`rgba(${255-(Math.floor(Math.random() * 50) + 1)}, ${159-(Math.floor(Math.random() * 100) + 1)}, ${64+(Math.floor(Math.random()*10)+1)})`}}
        )
       console.log(arrayOfEmotionsData)
       console.log(chartdata)
        // let chartData={labels:['oatmeal raisin','macadamia nut','chocolate chip'],datasets:[{label:"stats for one name", data:[5,3,2],backgroundColor:'rgba(255, 159, 64)'}]}
        let chartData={labels:['sadness','joy','fear','anger','disgust'],datasets:chartdata}
        // console.log(chartData1)
        return (
             <div>
                 <AnalysisList/>
                 <Chart chartData={chartData} legendPosition="top"/>
                 {/* ChartsContainer */}
             </div> );
    }
}

const mapStateToProps=(state) => {
    return{
        sentiment:state.sentiments.sentiments,
        emotions:state.emotions.emotions
    }
    
}
export default connect(mapStateToProps)(ChartsContainer) ;