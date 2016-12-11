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
        // console.log('this.props')
        // console.log(this.props)
        let Events =  CalEvents(this.props.Events)
        this.state = { Events, Date: this.props.Date }
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldcomponenent update ================')

    //     console.log(nextProps)
    //     console.log(nextState)
    //     console.log(this.state)
    //     console.log(this.props)
    //     console.log(this.props != nextProps)
    //     return this.props != nextProps

    // }

    componentWillReceiveProps(nextProps){
        // console.log('componentwilrecieveprops====================nextProps')
        // console.log(nextProps)
        
        let Events =  CalEvents(nextProps.Events)
        // console.log(Events)
        this.setState({ Events, Date: nextProps.Date })
    }

    handleClick(event){
        // event.preventDefault() 
        // console.log(this.state)
        // console.log(this.props)

        let change = (event.target.id == "nextWeek") ? 7 : -7;
        
        this.props.dispatch( changeWeek( change,
                                         this.state.Date,
                                         () =>  this.props.dispatch( fetchData() )
                                       ))
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
        // console.log('render----this.state--------')
        // console.log(this.state)

        // console.log(CalRows())
        let rows = CalRows()
        // console.log(rows)

        this.state.Events.map((event) => {
            console.log(event)
            let end = (event.begin.dayNum != event.final.dayNum) ? 24 : event.final.hours;
            for(let i=event.begin.hours; i<end; i++) {
                // console.log(i)
                rows[i][event.begin.dayNum] = event.label 
            }
        })
        // const { handleClick } = this.props
        console.log(rows)

        return (
            <div>
                <h2>{this.props.Date.substring(0, 7)}</h2>

                <Button id="lastWeek" onClick={this.handleClick.bind(this)} bsStyle="info">Last</Button>
                <Button id="nextWeek" onClick={this.handleClick.bind(this)} bsStyle="info">Next</Button>
                
                <BootstrapTable className="calTable" data={rows} striped hover >
                    <TableHeaderColumn className="colHeader" headerAlign='center' isKey dataField='time' width='10%'>Hrs</TableHeaderColumn>
                    {CalHeader}
                </BootstrapTable>

            </div>
        );
    }
}


function mapStateToProps(state=state) {
    console.log('------map--------state-------')
    console.log('current State = ')
    console.log(state)
    return { Events: state.data, Date: state.week };
}

function mapDispatchToProps(dispatch) {
    console.log('---------------------')
    console.log('dispatch thisWeek')
    console.log(thisWeek)
    return bindActionCreators({ fetchData, thisWeek, dispatch }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar)