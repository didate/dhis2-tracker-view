
import { useDataEngine } from '@dhis2/app-runtime'
import { PropTypes } from '@dhis2/prop-types'
import { Table, TableHead } from '@dhis2/ui-core'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchTeis } from '../../redux/actions/'
import Body from './Body'
import Header from './Header'


const ListTei = ({ teis }) => {

    return teis ? <Table>
        <Header headers={teis.headers} />
        <Body rows={teis.rows} />
    </Table> : <div>No data</div>
}

export default ListTei

/* ListTei.propTypes = {
    fetchTeis: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    teis: state.tei.data,
    loading: state.tei.loading
}) */

//export default connect(mapStateToProps, { fetchTeis })(ListTei)