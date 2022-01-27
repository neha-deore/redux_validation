const initialstate = { data: [], error: {} };
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regexname = RegExp(/^[A-Za-z]{3,30}$/);
export const updateState = (state = initialstate, action) => {

    switch (action.type) {
        case "push_data": console.log("in reducer");
            let allClear = true;
            let errordata = { nameError: '', ageError: '', emailError: '', cityError: '', genError: '', fieldError: '' }
            if (!action.payload.name || !action.payload.age || !action.payload.email || !action.payload.city || !action.payload.gen) {
                console.log("in all field");
                console.log(action.payload);
                errordata.fieldError = '*All Fields are Required';
                allClear = false;

            }
            if (!regexname.test(action.payload.name)) {
                errordata.nameError = '*Name chould contain a minimum of 3 characters and should contain only alphabets';
                allClear = false;

            }
            if (!regexname.test(action.payload.city)) {
                errordata.cityError = '*City chould contain a minimum of 3 characters and should contain only alphabets';
                allClear = false;

            }
            if (!regForEmail.test(action.payload.email)) {
                errordata.emailError = '*Enter valid email';
                allClear = false;

            }
            if (action.payload.age < 12 || action.payload.age > 150) {
                errordata.ageError = '*Age must be greater than 12 and less than 150';
                allClear = false;

            }
            if (!action.payload.gen) {
                errordata.genError = '*Plese Select a Gender';
                allClear = false;

            }

            if (allClear) {
                return { data: [...state.data, action.payload], error: errordata };
            }
            return { data: state.data, error: errordata }

        default: return state;
    }
}

export const updateCounter = (state = 0, action) => {

    switch (action.type) {
        case "INC":
            console.log(state)
            return state + 1

        case "DEC": return state - 1
        default: return state;
    }
}