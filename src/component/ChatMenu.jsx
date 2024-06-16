import React from 'react';
import { useGroqContext } from '../context/GroqContext';
import { Dropdown } from 'semantic-ui-react';
import { BsChevronRight } from 'react-icons/bs';
import "../index.css";

export default function ChatMenu({ onLogout, toggleMenu }) {

    const { data, model, temperature, setData, setModel, setTemperature, max_tokens, setMax_tokens } = useGroqContext();

    const modelOptions = [
        { key: 'llama3-70b-8192', text: 'llama3-70b-8192', value: 'llama3-70b-8192' },
        { key: 'llama3-8b-8192', text: 'llama3-8b-8192', value: 'llama3-8b-8192' },
        { key: 'gemma-7b-it', text: 'gemma-7b-it', value: 'gemma-7b-it' },
        { key: 'mixtral-8x7b-32768', text: 'mixtral-8x7b-32768', value: 'mixtral-8x7b-32768' },
    ];

    return (
        <div className="chat-menu bg-gray-300">
            <div className="menu-header">
                <div onClick={toggleMenu} className="menu-item">
                    <BsChevronRight className="menu-icon" />
                </div>
            </div>
            <div className="menu-body">
                <div className="input-group">
                    <p>Pesan</p>
                    <textarea
                        className="input-textarea resize-none max-h-40 overflow-y-auto"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <p>Model</p>
                    <Dropdown
                        button
                        selection
                        className='input-dropdown'
                        options={modelOptions}
                        value={model}
                        onChange={(e, { value }) => setModel(value)}
                    />
                </div>
                <div className="input-group">
                    <div className="flex justify-between">
                        <p>temperature</p>
                        <p
                            style={{ border: '1px, solid, gray-500' }}
                            className='w-[15%] text-right rounded-md'>{temperature.toFixed(2)}</p>
                    </div>
                    <input
                        className="input-range w-full cursor-pointer"
                        onChange={(e) => setTemperature(parseFloat(e.target.value))}
                        value={temperature}
                        type="range"
                        min={0}
                        max={2}
                        step={0.01}
                    />
                    <div className="flex justify-between">
                        <p>max tokens</p>
                        <p
                            style={{border:'1px, solid, gray-500'}}
                            className='w-[15%] text-right rounded-md'>{max_tokens}</p>
                    </div>
                    <input
                        className="w-full cursor-pointer"
                        onChange={(e) => setMax_tokens(parseInt(e.target.value))}
                        value={max_tokens}
                        type="range"
                        min={0}
                        max={8192}
                        step={1}
                    />
                </div>
            </div>
            <div className='flex justify-end items-center mb-4'>
                <button onClick={onLogout} className='bg-gray-500 text-white px-4 py-2 rounded-md'>
                    Logout
                </button>
            </div>
        </div>
    );
};