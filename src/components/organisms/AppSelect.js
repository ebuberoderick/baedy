'use client'
import React from 'react'

function AppSelect({ label, required, value, name, icon, options, defaultValue, onChange }) {

    return (
        <div className='space-y-2 cursor-pointer text-green'>

            <div>
                <label className="font-semibold text-gray-600 text-sm">{label}</label>
            </div>
            <div className='relative'>
                <div className="absolute w-9 h-full flex items-center justify-center pl-1.5 text-gray-500">{icon}</div>
                <select
                    name={name}
                    onChange={(e) => onChange && onChange(e)}
                    required={required}
                    value={value}
                    className="w-full border appearance-none focus:border-black disabled:border-gray-100 disabled:cursor-default border-black p-3 pl-9 peer outline-none rounded-lg"
                >
                    <option value="" disabled selected hidden>
                        Select {label}
                    </option>
                    {options?.map((option) => (
                        <option key={option.value} defaultValue={typeof (defaultValue) === "string" ? defaultValue === option.value : defaultValue === option.label} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    )
}

export default AppSelect