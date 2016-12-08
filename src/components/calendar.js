import React from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { fetchData } from '../actions/index';
import { CalHeader } from './cal_header';
import { CalRows } from './cal_rows';


class Calendar extends React.Component {

    renderEvents() {

        return this.props.Events.map( (Event) => {
            return (
                <li className='list-group-item' key={Event.start} >
                    <Link to={"event/"+ Event.label} >
                        <h4 className="indexPerson" >{Event.label}</h4>
                        <p className="indexPerson"  >{Event.category}</p>
                        <p className="indexPerson"  >{Event.start}</p>
                        <p className="indexPerson"  >{Event.label}</p>
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <BootstrapTable className="calTable" data={CalRows} striped hover >
                    <TableHeaderColumn className="colHeader" headerAlign='center' isKey dataField='time' width='10%'></TableHeaderColumn>
                    {CalHeader}
                </BootstrapTable>
                { this.renderEvents() }
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



    
// 

                // <TableHeaderColumn className="colHeader" headerAlign='center' isKey dataField='mon'>Mon</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" dataField='tues'>Tues</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" headerAlign='center' dataField='wed'>Wed</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" dataField='thurs'>Thurs</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" dataField='fri'>Fri</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" dataField='sat'>Sat</TableHeaderColumn>
                // <TableHeaderColumn className="colHeader" dataField='sun'>Sun</TableHeaderColumn>