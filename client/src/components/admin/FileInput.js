import React from 'react'
import Dropzone from 'react-dropzone'

const FileInput = field => {
    // const file = field.input.value

    return (
        <div>
            <Dropzone
                name={field.name}
                onDrop={(fileToUpload) => field.input.onChange(fileToUpload)}
            >asdf
            </Dropzone>
        </div>
    )
}

export default FileInput