import React from 'react'
// import Dropzone from 'react-dropzone'

// const FileInput = field => {
//     // const file = field.input.value

//     return (
//         <div>
//             <Dropzone
//                 name={field.name}
//                 onDrop={(fileToUpload) => field.input.onChange(fileToUpload)}
//             >asdf
//             </Dropzone>
//         </div>
//     )
// }

class FileInput extends React.Component {
    onChange = e => {
        const { input: { onChange } } = this.props

        onChange(e.target.files[0])
    }

    render() {
        const { input: { value } } = this.props
        const { input, label, required, meta } = this.props

        return (
            <div>
                <label>{label}</label>
                <div>
                    <input type='file' acccept='.jpg, .png, .jpeg' onChange={this.onChange} />
                </div>
            </div>
        )
    }
}

export default FileInput