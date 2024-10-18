import React from 'react'

const FormMaterialize = () => {
    
    return (
        <div>
            FormMaterialize
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">textsms</i>
                            <input type="text" id="autocomplete-input" className="autocomplete" />
                            <label htmlFor="autocomplete-input">Autocomplete</label>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='container'>
                    <div className='input-field col s12'>
                        <input type="text" id='autocomplete-input' className='autocomplete' />
                        <label htmlFor="autocomplete-input">Autocomplete</label>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FormMaterialize