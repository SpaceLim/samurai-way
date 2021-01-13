import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validator";

const maxLength50 =  maxLengthCreator(50);

   const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea}
                           validate={[required, maxLength50]}
                           name="newMessageBody" placeholder="Enter yor message" />

                </div>
                <div> <button>sendMessage</button></div>
            </form>
        )
    }

    export  const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);
