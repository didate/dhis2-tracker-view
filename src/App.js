import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import TrackerView from './views/TrackerView'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => (
    <Provider store={store}>
        <div >
            <DataQuery query={query}>
                {({ error, loading, data }) => {
                    if (error) return <span>ERROR</span>
                    if (loading) return <span>...</span>
                    return (
                        <TrackerView></TrackerView>
                    )
                }}
            </DataQuery>
        </div>
    </Provider>
)

export default MyApp
