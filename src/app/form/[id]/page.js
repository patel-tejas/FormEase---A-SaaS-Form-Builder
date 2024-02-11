// "use client"

// import { useState } from "react";
import axios from "axios";
import Form from "./Form";

const getFields = async (id) => {
    try {
        
        const response = await axios.post("http://localhost:3000/api/get-form", {id: id});
        // console.log(response);
        const fields = await response.data;
        // console.log(fields);
        // const data = fields[0];
        // console.log(data);
        return fields
    } catch (TypeError) {
        // console.log(TypeError);
        const data = undefined
        return data
    }
}

const page = async ({ params }) => {
    // const [details, setDetails] = useState({ user_mobile: ""})

    const fields = await getFields(params.id)
    // console.log(field);
    

    // Capitalize function 
    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    }

    // const submitForm = async (e) => {
    //     e.preventDefault()

    //     // looping through our questions and getting the values based on the element name
    //     const formTargets = e.target
    //     let data = [];
    //     formContent.map((content) => {
    //         const element = (content.question_type)
    //         data.push({
    //             question: content.label,
    //             question_type: element,
    //             answer: formTargets[element].value
    //         })
    //     })
    //     // console.log("Form data ", data);
    //     const title = field.title
    //     const id = field.id
    //     const user_data = { title, id, user_data: data }
    //     // console.log(user_data);
    //     const response = await fetch('http://localhost:5000/submit-form', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(user_data)
    //     })
    //     const res = await response.json()
    //     // console.log(res);

    //     const userDataArray = res.user_data
    //     const userDetails = {}
    //     userDataArray.map((field) => {
    //         userDetails[field.question_type] = field.answer
    //     })
    //     // console.log(userDetails);
    //     const userInfo = await fetch('http://localhost:5000/submit-userdata', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(userDetails)
    //     })
    //     const userJSON = await userInfo.json()
    //     console.log(userJSON);
    // }

    // const autoFill = async () => {
    //     const mobile= {mobile: "883929881"}
    //     const userInfo = await fetch('http://localhost:5000/fetch-userdata', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(mobile)
    //     })
    //     const userJSON = await userInfo.json()
    //     console.log(userJSON);
    // }

    // const onChange = ((e) => {
    //     setDetails({ ...details, [e.target.name]: e.target.value })
    // })

    if (!fields) {
        return (
            <div className="flex items-center justify-center mt-5">
                Sorry Form not found
            </div>
        )
    }


    else {

        return (
            <Form fields={fields}/>
        )
    }
}

export default page