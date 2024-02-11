"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

const Form = (fields) => {

    const router = useRouter()

    // console.log(field.field.formDoc);
    let formContent = fields.fields.formDoc[0].content
    // console.log(formContent);     
    let field = fields.fields.formDoc[0]
    // console.log(field);
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

    const submitForm = async (e) => {
        e.preventDefault()

        // looping through our questions and getting the values based on the element name
        const formTargets = e.target
        let data = [];
        formContent.map((content) => {
            const element = (content.question_type)
            data.push({
                question: content.label,
                question_type: element,
                answer: formTargets[element].value
            })
        })
        // console.log("Form data ", data);
        const title = field.title
        const id = field.id
        const user_data = { title, id, user_data: data }

        // console.log(user_data);
        try {
            const response = await axios.post("http://localhost:3000/api/submit", user_data)

            const res = await response.data
            const userDataArray = res.userDoc.user_data
            // console.log(userData);
            const userDetails = {}
            userDataArray.map((field) => {
                userDetails[field.question_type] = field.answer
            })


            const submitted_user = await axios.post("http://localhost:3000/api/user-data", userDetails)
            console.log(submitted_user.data);

            toast.success('Form submitted', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

            router.push("http://localhost:3000")

        } catch (error) {
            toast.error('Oops! We are having some trouble generating your form', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
        
        // const response = await axios.post("http://localhost:3000/api/submit", user_data)

        // const res = await response.data
        // const userDataArray = res.userDoc.user_data
        // // console.log(userData);
        // const userDetails = {}
        // userDataArray.map((field) => {
        //     userDetails[field.question_type] = field.answer
        // })


        // const submitted_user = await axios.post("http://localhost:3000/api/user-data", userDetails)
        // console.log(submitted_user.data);


    }
    return (
        <div className='mt-5 mx-auto m-2 flex-col max-w-[780px] min-h-screen border-t-4 rounded-lg border-gray-700 bg-white'>
            <div className='flex flex-col w-full'>
                <h2 className='w-full text-lg lg:text-2xl text-center mt-5'>{field.title}</h2>
            </div>
            <form onSubmit={submitForm} className='flex flex-col gap-2 mt-5'>
                {
                    formContent.map((field, idx) => {
                        return (
                            <div key={idx} >
                                <div className='flex justify-between items-center space-x-2'>
                                    <div key={field.name} className='block text-sm font-medium text-gray-700 rounded-lg'>
                                        {
                                            (field.question_type === "other" || field.question_type === "multichoice") ?
                                                <label className="p-3 " htmlFor={field.label}>{field.label}</label>
                                                :
                                                <label className="p-3" htmlFor={field.question_type}>{titleCase(field.question_type)}</label>
                                        }
                                    </div>

                                </div>
                                <div className='my-4'>
                                    {
                                        field.question_type == 'name' && <input name={field.question_type} type="text" className='p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm' placeholder={titleCase(field.question_type)}></input>
                                    }
                                    {
                                        field.question_type == 'mobile' && <input name={field.question_type} type="tel" className='p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm' placeholder={titleCase(field.question_type)}></input>
                                    }
                                    {
                                        field.question_type == 'address' && <input name={field.question_type} type="text" className='p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm' placeholder={titleCase(field.question_type)}></input>
                                    }
                                    {
                                        field.question_type == 'gender' && <input name={field.question_type} type="text" className='p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm' placeholder={titleCase(field.question_type)}></input>
                                    }
                                    {
                                        field.question_type == 'other' && <input name={field.question_type} type="text" className='p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm' placeholder={titleCase(field.label)}></input>
                                    }
                                    {
                                        field.question_type == 'paragraph' && <textarea name={field.question_type} rows={4} type="text" className='p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm' placeholder={field.question_type}></textarea>
                                    }
                                    {
                                        field.question_type == 'multichoice' &&
                                        <select name={field.question_type} id="" className='p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm'>
                                            {field.list.map((item) => {
                                                return <option key={item} value={item} >{item}</option>
                                            })}
                                        </select>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div className="flex items-center justify-center">
                    <input type="submit" className="px-3 py-2 bg-gray-600 hover:bg-gray-700 duration-200 rounded-lg text-white"></input>
                </div>
            </form>
            {/* <button id="autofill" name="autofill" className="w-max p-3 bg-blue-400 rounded-lg" onClick={autoFill}>Check</button> */}
        </div>
    )
}

export default Form