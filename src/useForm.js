import {useState} from 'react'

const useForm =(validate)=>{
    const [values , setValues] = useState({
        productcode:'',
        productname:'',
        productqty:'',
    }); 
    const[errors , setErrors] = useState({});

    const handleChange = e=>{
        const {name,values} = e.target;
        setValues({
            ...values,
            [name]:values
        });
    };

    const handleSubmit = e=>{
        e.preventDefault();

        setErrors(validate(values));
    };

    return {handleChange,values,handleSubmit,errors};
};
export default useForm;