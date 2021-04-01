import Model from '../Components/Model'
import useForm from '../Components/useFormHook'

const ContentComponent = ({ closeModel, children, handleFormSubmit }) => {
    const HandlecloseModel = (e) => {
        e.preventDefault()
        closeModel(false)
    }
    const submit = (e) => {
        handleFormSubmit(e)
        closeModel(false)
    }
    return (
        <form onSubmit={submit}>
            {children}
            <div className="model-actions">
                <button className='btn btn-1 btn-md' style={{marginRight: '8px'}}>Update</button>
                <button className='btn btn-1 btn-md' onClick={HandlecloseModel}>Cancel</button>
            </div>
        </form>
    )
}
const UserSettingUpdateModel = ({ heading, dataType, userData, setUserData,  active, setActive }) => {
    const [fields, handleFieldChanges] = useForm(userData)
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (!e.target.firstChild.dataset.error){
            setUserData(state => {
                return {...state, ...fields}
            })
        }

    }
    const renderFormFields = () => {
        if (dataType === 'user-info'){
            return (
            <>
                <div className="form__field">
                    <label for="formInput#text">Full Name: </label>
                    <input
                        class="input input--text"
                        id="formInput#text"
                        type="text"
                        name="name"
                        placeholder="Enter your full name" value={fields.name} onChange={handleFieldChanges} style={{width: '100%', minWidth: 'auto'}}/>
                </div>
                <div class="form__field">
                  <label for="formInput#textarea">Bio: </label>
                  <textarea
                    class="input input--textarea"
                    name="bio"
                    id="formInput#textarea"
                    placeholder="Write something awesome..." value={fields.bio} onChange={handleFieldChanges} style={{width: '100%', minWidth: 'auto'}}
                  ></textarea>
                </div>
            </>
            )
        }
        else if (dataType === 'user-detail'){
            return (
                <>
                <div className="form__field">
                    <label for="formInput#text">UserName: </label>
                    <input
                        class="input input--text"
                        id="formInput#text"
                        type="text"
                        name="username"
                        placeholder="Enter your full name" value={fields.username} onChange={handleFieldChanges} style={{width: '100%', minWidth: 'auto'}}/>
                </div>
                <div className="form__field">
                    <label for="formInput#text">Email: </label>
                    <input
                        class="input input--text"
                        id="formInput#text"
                        type="email"
                        name="email"
                        placeholder="Enter your full name" value={fields.email} onChange={handleFieldChanges} style={{width: '100%', minWidth: 'auto'}}/>
                </div>
                </>
                )
        }
        else if (dataType === 'user-skills'){
            return (
                <>
                    <div className="form__field" data-error={dataType}>
                        <label for="formInput#text">Tags</label>
                        <input
                            class="input input--text"
                            id="formInput#text"
                            type="text"
                            name="skills"
                            placeholder="Enter your full name" value={fields.skills} onChange={handleFieldChanges} style={{width: '100%', minWidth: 'auto'}}/>
                    </div>
                </>
                )
        }

    }
    return (
        <Model heading={heading} active={active} setActive={setActive}>
            <ContentComponent closeModel={setActive} handleFormSubmit={handleFormSubmit}>
                {renderFormFields()}
            </ContentComponent>
        </Model>
    )
}

export default UserSettingUpdateModel