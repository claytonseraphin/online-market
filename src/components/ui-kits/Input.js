import React from "react";
import clsx from "clsx";

export default function Input(props) {
    // Implement Input
    const {className, type="text", placeholder, required, ...rest} = props;
    const classes = clsx({
        input: true
    },
    className
    );
    return (
        <>
            <label className="label">
                {placeholder}
                {required && <span className="input-required">*</span>}
                <div>
                    <input 
                        type={type}
                        placeholder={placeholder}
                        className={classes}
                        required={required}
                        {...rest}
                    />
                </div>
            </label>
        </>
    );
}