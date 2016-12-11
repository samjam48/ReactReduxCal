import React from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { fetchData } from '../actions/index';
import { CalHeader } from './cal_header';
import { CalRows } from './cal_rows';
import { CalEvents } from './cal_events';


class Calendar extends React.Component {
    constructor(props) {
        super(props);
        let Events =  CalEvents(this.props.Events)
        this.state = { Events }
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(this.state.Events)
        console.log('nextState')
        console.log(nextState)
        console.log('nextProps')
        console.log(nextProps)
        console.log(this.props.Events != nextProps.Events)
        return this.props.Events != nextProps.Events
    }

    componentWillReceiveProps(nextProps){
        
        let Events =  CalEvents(nextProps.Events)
        this.setState({ Events })
    }

    // componentWillUpdate(nextState, nextProps){
    //     if(nextState != nextProps) componentWillReceiveProps(nextProps)
    // }


    renderEvents() {
        // let Events =  CalEvents(this.props.Events)
        let events = this.state.Events

        return this.state.Events.map( (Event) => {
            return (
                <li className='list-group-item' key={Event.start.day} >
                    <Link to={"event/"+ Event.label} >
                        <h4 className="indexPerson" >{Event.label}</h4>
                        <p className="indexPerson"  >{Event.start.hours}</p>
                        <p className="indexPerson"  >{Event.start.dayName}</p>
                        <p className="indexPerson"  >{Event.end.hours}</p>
                        <p className="indexPerson"  >{Event.end.dayName}</p>
                        <p className="indexPerson"  >{Event.category}</p>
                    </Link>
                </li>
            )
        })
    }



    render() {
        // let events = this.state.Events
        // console.log(events[0].label)
        // console.log(events[0].start.dayNum)
        // console.log(CalRows[events[0].start.hours])
        // CalRows[events[0].start.hours][events[0].start.dayNum] = events[0].label

        this.state.Events.map((event) => {
            let end = (event.start.dayNum != event.end.dayNum) ? 24 : event.end.hours;
            for(let i=event.start.hours; i<end; i++) {
                console.log(i)
                CalRows[i][event.start.dayNum] = event.label 
            }
        })


        return (
            <div>
                <BootstrapTable className="calTable" data={CalRows} striped hover >
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
    return { Events: state.data };
}




function mapDispatchToProps(dispatch) {
    console.log('dispatch')
    console.log(fetchData)
    return bindActionCreators({ fetchData }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar)



            //    { this.renderEvents() }


                // <TableHeaderColumn className="colHeader" headerAlign='center' isKey dataField='mon'>Mon</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" dataField='tues'>Tues</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" headerAlign='center' dataField='wed'>Wed</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" dataField='thurs'>Thurs</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" dataField='fri'>Fri</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" dataField='sat'>Sat</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" dataField='sun'>Sun</TableHeaderColumn>