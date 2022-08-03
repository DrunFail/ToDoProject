import { useState } from "react";

export default function TodoItem({ el }) {
    const [complete, setComplete] = useState(el.complete)
    return (
        <div>
            <input checked={complete} onChange={(e) => setComplete(!complete)} type='checkbox' />
            <p>{el.title}</p>
        </div>
    );
}