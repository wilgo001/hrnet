import { createSlice } from "@reduxjs/toolkit";

const testState = [
    {
        firstName: 'Jean',
        lastName: 'Pierre',
        birthDate: '1999-02-15',
        startDate: '2020-09-12',
        street:'Hello',
        city: 'city',
        state: 'Ohio',
        zipCode: '1245',
        department: 'Sales',
    },
    {
        firstName: 'François',
        lastName: 'Michel',
        birthDate: '2001-02-15',
        startDate: '2020-01-12',
        street:'here',
        city: 'city',
        state: 'Ohio',
        zipCode: '45000',
        department: 'Marketing',
    },
    {
        firstName: 'Michel',
        lastName: 'François',
        birthDate: '1999-06-15',
        startDate: '2018-09-12',
        street:'world',
        city: 'city',
        state: 'Ohio',
        zipCode: '32000',
        department: 'Engineering',
    },
    {
        firstName: 'Jean',
        lastName: 'Pierre',
        birthDate: '1999-02-15',
        startDate: '2020-09-12',
        street:'Hello',
        city: 'city',
        state: 'Ohio',
        zipCode: '11111',
        department: 'Sales',
    },
    {
        firstName: 'Jean',
        lastName: 'Pierre',
        birthDate: '1999-02-15',
        startDate: '2020-09-12',
        street:'Hello',
        city: 'city',
        state: 'Ohio',
        zipCode: '11122',
        department: 'Sales',
    },
    {
        firstName: 'Jean',
        lastName: 'Pierre',
        birthDate: '1999-02-15',
        startDate: '2020-09-12',
        street:'Hello',
        city: 'city',
        state: 'Ohio',
        zipCode: '22222',
        department: 'Sales',
    },
    {
        firstName: 'Jean',
        lastName: 'Pierre',
        birthDate: '1999-02-15',
        startDate: '2020-09-12',
        street:'Hello',
        city: 'city',
        state: 'Ohio',
        zipCode: '33333',
        department: 'Sales',
    },
    {
        firstName: 'Jean',
        lastName: 'Pierre',
        birthDate: '1999-02-15',
        startDate: '2020-09-12',
        street:'Hello',
        city: 'city',
        state: 'Ohio',
        zipCode: '44444',
        department: 'Sales',
    },
    {
        firstName: 'Jean',
        lastName: 'Pierre',
        birthDate: '1999-02-15',
        startDate: '2020-09-12',
        street:'Hello',
        city: 'city',
        state: 'Ohio',
        zipCode: '55555',
        department: 'Sales',
    },
    {
        firstName: 'Jean',
        lastName: 'Pierre',
        birthDate: '1999-02-15',
        startDate: '2020-09-12',
        street:'Hello',
        city: 'city',
        state: 'Ohio',
        zipCode: '66666',
        department: 'Sales',
    },
    {
        firstName: 'Jean',
        lastName: 'Pierre',
        birthDate: '1999-02-15',
        startDate: '2020-09-12',
        street:'Hello',
        city: 'city',
        state: 'Ohio',
        zipCode: '77777',
        department: 'Sales',
    },
    {
        firstName: 'Jean',
        lastName: 'Pierre',
        birthDate: '1999-02-15',
        startDate: '2020-09-12',
        street:'Hello',
        city: 'city',
        state: 'Ohio',
        zipCode: '88888',
        department: 'Sales',
    },
    
]

const initialState = {
    employeeList: testState
}

export const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employeeList.push(action.payload)
        },
        removeEmployee: (state, action) => {
            state.employeeList.splice(action.payload);
        }
    }
})

export const { addEmployee, removeEmployee } = employeeSlice.actions;

export default employeeSlice.reducer ;