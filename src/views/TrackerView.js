import { useDataEngine } from '@dhis2/app-runtime'
import { PropTypes } from '@dhis2/prop-types'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchProgram } from '../redux/actions/'
import {
    ReactFinalForm,
    SingleSelectFieldFF,
    Button,

} from '@dhis2/ui'
import { CircularLoader, LinearLoader } from '@dhis2/ui-core'
import { Grid } from '@material-ui/core'
import Widget from '../components/widget'

const TrackerView = ({ fetchProgram, programs, loading }) => {

    const engine = useDataEngine()
    const { Field } = ReactFinalForm


    const alertValues = values => {
        const formattedValuesString = JSON.stringify(values, null, 2)
        alert(formattedValuesString)
    }

    useEffect(() => {
        fetchProgram(engine);
    }, [])

    return loading ? <div>Loading</div> : <div>

        <div className="container">
            <div className="row">
                Hello
            </div>
            <div className="row">
                <Widget title="Hello">
                    je suis une widget
                </Widget>
            </div>
        </div>
        <h1>Form</h1>
        <ReactFinalForm.Form onSubmit={alertValues}>
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
        </ReactFinalForm.Form>
    </div>
}


TrackerView.propTypes = {
    fetchProgram: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    programs: state.program.data,
    loading: state.program.loading
})

export default connect(mapStateToProps, { fetchProgram })(TrackerView)