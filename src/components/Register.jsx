import React from 'react'

export default function Register() {

    const submitForm = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let user = {
            name: '',
            email: '',
            password: '',
            age: '',
            gender: ''
        }
        for (const [key, value] of formData) {
            console.log(key, value)
            user[key] = value;
        }
        fetch('https://b62b-13-201-128-125.ngrok-free.app/register-user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(json=>json.json()).then(data=>{
            if (data.message) {
                if (data.message === 'Success') {
                    window.location.reload()
                }
                
            }
        })
    }
    return (
        <div className="row">
            <div className="col-5 m-auto">
                <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <img src="./images/image.png" id="icon" alt="User Icon" />
                        </div>

                        <form onSubmit={submitForm}>
                            <input type="text" id="name" className="fadeIn second" name="name" placeholder="name" />
                            <input type="email" id="email" className="fadeIn third" name="email" placeholder="email" />
                            <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" />
                            <input type="text" id="age" className="fadeIn third" name="age" placeholder="age" />
                            <label className="form-check form-check-inline fadeIn second">
                                <input className="form-check-input" type="radio" name="gender" value="Male" />
                                <span className="form-check-label"> Male </span>
                            </label>
                            <label className="form-check form-check-inline mb-4 fadeIn second">
                                <input className="form-check-input" type="radio" name="gender" value="Female" />
                                <span className="form-check-label"> Female</span>
                            </label>
                            <br />
                            <input type="submit" className="fadeIn fourth" value="Register" />
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="/">Login</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
