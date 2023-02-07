import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { SERVER_URL } from '@/../app.config'
const id = uuidv4();

const Label = styled.label`
border: 1px dashed #cccccc;
width:100%;
min-height: 100px;
cursor: pointer;
`
interface propsType {
    onChange: (payload: { file: File, name: string, src: string }) => void,
    onChangeUrl?: () => string,
    url: string,
    name: string, [x: string]: any
}
export default function Upload({ onChange, url, name, ...rest }: propsType) {

    const [src, setSrc] = useState('')


    function handleChange(event: any) {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSrc(url)
        onChange({ file, name: name, src })
    }

    useEffect(() => {
        if (url.includes('http'))
            setSrc(url)
        else
            setSrc(`${SERVER_URL}/${url}`)

    }, [url])


    return (
        <>
            <label className='my-2' > {rest.label}</label>
            <Label className='text-center flex items-center justify-center' htmlFor={`input-file-${id}`}>
                {
                    src ? <img className='h-72' src={src} alt='img' /> : <span>UPLOAD</span>
                }
            </Label>
            <input placeholder='input' name={name} className='hidden' id={`input-file-${id}`} type='file' onChange={handleChange} />

        </>

    )
}
