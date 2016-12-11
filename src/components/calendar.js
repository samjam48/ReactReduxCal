import React from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { fetchData, thisWeek, changeWeek } from '../actions/index';
import { CalHeader } from './cal_header';
import { CalRows } from './cal_rows';
import { CalEvents } from './cal_events';


class Calendar extends React.Component {
    constructor(props) {
        super(props);
        console.log('this.props')
        console.log(this.props)
        let Events =  CalEvents(this.props.Events)
        this.state = { Events }
    }

    componentWillReceiveProps(nextProps){
        
        let Events =  CalEvents(nextProps.Events)
        this.setState({ Events })
    }

    handleCick(){

    }


    // renderEvents() {
    //     let events = this.state.Events

    //     return this.state.Events.map( (Event) => {
    //         return (
    //             <li className='list-group-item' key={Event.start.day} >
    //                 <Link to={"event/"+ Event.label} >
    //                     <h4 className="indexPerson" >{Event.label}</h4>
    //                     <p className="indexPerson"  >{Event.start.hours}</p>
    //                     <p className="indexPerson"  >{Event.start.dayName}</p>
    //                     <p className="indexPerson"  >{Event.end.hours}</p>
    //                     <p className="indexPerson"  >{Event.end.dayName}</p>
    //                     <p className="indexPerson"  >{Event.category}</p>
    //                 </Link>
    //             </li>
    //         )
    //     })
    // }



    render() {

        // console.log(CalRows())
        let rows = CalRows()

        this.state.Events.map((event) => {
            let end = (event.start.dayNum != event.end.dayNum) ? 24 : event.end.hours;
            for(let i=event.start.hours; i<end; i++) {
                // console.log(i)
                rows[i][event.start.dayNum] = event.label 
            }
        })


        return (
            <div>
                <h2>{this.props.Date.substring(0, 7)}</h2>

                <Button id="lastWeek" onClick={this.handleClick} bsStyle="info">Last</Button>
                <Button id="nextWeek" onClick={this.handleClick} bsStyle="info">Next</Button>
                
                <BootstrapTable className="calTable" data={rows} striped hover >
                    <TableHeaderColumn className="colHeader" headerAlign='center' isKey dataField='time' width='10%'>Hrs</TableHeaderColumn>
                    {CalHeader}
                </BootstrapTable>

            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log('---------------------')
    console.log('current State = ')
    console.log(state)
    return { Events: state.data, Date: state.week };
}

function mapDispatchToProps(dispatch) {
    console.log('---------------------')
    console.log('dispatch thisWeek')
    console.log(thisWeek)
    return bindActionCreators({ fetchData, thisWeek }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar)