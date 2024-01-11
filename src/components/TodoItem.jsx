/* eslint-disable react/prop-types */
import { GiBookPile } from "react-icons/gi";
import { FaRegComments } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { FaRegCalendarDays } from "react-icons/fa6";
import Modal from "./Modal";
import { useState } from "react";

function TodoItem({ todo }) {
    const [visible, setVisible] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState([]);

    const { text, clientName, taskHandlerName } = todo;
    return (
        <div className="w-[95%] bg-white p-2  my-3 mx-2 box-border rounded">
            <div className="flex justify-between px-2 mt-2">
                <div className="flex items-center">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-6 h-6 rounded-full object-cover" />
                    <p className="ml-2 text-sm font-semibold">{clientName}</p>
                </div>

                <div className="flex items-center">
                    <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJhbmRvbSUyMHBlb3BsZSUyMGNvbG9yZnVsJTIwYmd8ZW58MHx8MHx8fDA%3D" alt="" className="w-6 h-6 rounded-full object-cover" />
                    <p className="ml-2 text-sm font-semibold">{taskHandlerName}</p>
                </div>
            </div>

            <div className="flex items-center mt-2">
                <GiBookPile className="w-6 h-6 ml-2" />
                <p className="ml-2 text-sm">{text}</p>
            </div>

            {/* last line of todo */}
            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-6 h-6 rounded-full object-cover" />

                    <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-6 h-6 rounded-full object-cover ml-1" />
                    <p className="ml-1 rounded-md bg-gray-200 text-center font-medium w-7 cursor-pointer">12+</p>
                </div>
                <div className="flex items-center">
                    <FaRegComments className="w-6 text-center cursor-pointer" />
                    <p>20</p>
                </div>

                <div className="flex items-center">
                    <ImAttachment className="w-6 cursor-pointer"
                        onClick={() => setVisible(true)}
                    />
                    <p>{selectedFiles.length}</p>
                </div>

                <div className="flex items-center">
                    <FaRegCalendarDays className="w-6 " />
                    <p>{new Date().toLocaleDateString()}</p>
                </div>

            </div>
            <Modal visible={visible} setVisible={setVisible} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
        </div>
    )
}

export default TodoItem
