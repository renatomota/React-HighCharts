import React, { Component } from "react"
import Highcharts from 'highcharts'
require("highcharts/js/highcharts-more")(Highcharts);


//solid-gauge import
//to import another chart just change this =D
require("highcharts/js/modules/solid-gauge")(Highcharts);

//dark theme, can import others
require("highcharts/js/themes/dark-unica")(Highcharts);


export default class Chart extends Component {

    componentDidMount() {
        this.chart = new Highcharts["Chart"](
            this.refs.chart,
            this.props.options,
        )

    }

    render() {
        return (
            <div>
                <div ref="chart" />
            </div>
        )
    }
}
