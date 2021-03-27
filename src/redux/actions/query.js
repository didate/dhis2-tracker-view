


export const programsQuery = {
    result: {
        resource: 'programs',
        fields: ''
    }
}

export const teisQuery = (programUid) => {
    return {
        result: {
            resource: 'trackedEntityInstances/query',
            params: {
                program: programUid,
                ouMode: 'ACCESSIBLE',
                order: 'created:desc',
                pageSize: 50,
                totalPages: true
            }
        }
    }
}