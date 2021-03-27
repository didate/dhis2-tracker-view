import { useDataEngine } from '@dhis2/app-runtime'
import { PropTypes } from '@dhis2/prop-types'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchProgram, fetchTeis } from '../redux/actions/'
import ListTei from './ui/ListTei'
import {
    ReactFinalForm,
    SingleSelectFieldFF,
    Button,

} from '@dhis2/ui'
import { CircularLoader, LinearLoader } from '@dhis2/ui-core'
import Widget from '../components/widget'

const TrackerView = ({ fetchProgram, fetchTeis, programs, teis, loading }) => {

    const engine = useDataEngine()
    const { Field } = ReactFinalForm


    const alertValues = values => {
        const formattedValuesString = JSON.stringify(values, null, 2)
        alert(formattedValuesString)
    }
    const handleChange = e => {
        fetchTeis(engine, e.target.value);
    }

    useEffect(() => {
        fetchProgram(engine);
    }, [])

    return loading ? <div>Loading</div> : <div>

        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <h1>Form</h1>
                    <select name="program" id="program" onChange={handleChange} >
                        {programs.map((item) => {
                            return <option key={item.value} value={item.value}>{item.label}</option>
                        })}
                    </select>
                </div>
                {/*  <ReactFinalForm.Form onSubmit={alertValues}>
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field
                                    name="title"
                                    label="Title"
                                    initialValue='none'
                                    component={SingleSelectFieldFF}
                                    options={programs}

                                />
                            </div>

                            <div>
                                <Button type="submit" primary>
                                    Submit form
                        </Button>
                            </div>

                        </form>
                    )}
                </ReactFinalForm.Form> */}
            </div>
            <div className="row">
                {teis ? <ListTei teis={teis} /> : <div>No data</div>}
            </div>
        </div>





    </div>
}


TrackerView.propTypes = {
    fetchProgram: PropTypes.func.isRequired,
    fetchTeis: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    programs: state.program.data,
    loading: state.program.loading,
    teis: state.tei.data
})

export default connect(mapStateToProps, { fetchProgram, fetchTeis })(TrackerView)